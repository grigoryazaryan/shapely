//  temporary shim until setTimeout is added to XD
global.setTimeout = (fn) => fn;
global.clearTimeout = (fn) => {
}


const ImageFill = require("scenegraph").ImageFill;
const Utl = require("./Utils.js");
const SVG = require("./svg.js");
const $ = require("./jquery");
const C = require("./Const");
const PAGE_SIZE = 15;

let isDialogClosingOnAdd = true;
let selectedIconType;

const {
    Rectangle,
    Color
} = require("scenegraph");


async function createDialog(selection, id = "dialog") {
    let selectedImageEntry;
    let isLoading = false;

    const sel = `#${id}`;
    // let dialog = document.querySelector(sel);
    // if (dialog) {
    //     return dialog;
    // }

    document.body.innerHTML = `
<style>
    ${sel} form {
        width: 400px;
    }
    p {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }


      .center {
    text-align: center;
  }

  .logo {
    width: 24px;
    height: 24px;
  }

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .main-content {
    margin: 10px 10px 10px 10px;
  }

  .element {
    display: flex;
    display: block;
    width: 24px;
    heigth: 24px;
    margin: 20px 20px 20px 20px;
  }

  .main-area {
        width: 97%;
        height: 200px;
        margin-left: 5px;
        margin-top: 5px;
        margin-right: 5px;
        overflow-y: scroll;
        list-style: none;
      }

      .wide {
        width: 100%;
      }

      .border-backgr {
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #8c9199;
        background-color: #fbfbfb;
      }


    .flex-popup {
      display: flex;
      flex-direction: column;
      width: 400px;
    }

    .flex-container {
        display: flex;
  		background-color: none;
  		}

    .flex-sidebar {
      display: flex;
      flex-direction: column;
      width: 25%;
      height: 90%;
      margin-right: 10px;
      border-radius: 10px;
      border-style: solid;
      border-width: 1px;
      border-color: #676d77;
      text-align: left;
      padding-left: 5px;
      list-style: none;
    }

    .flex-main-area {

    }

    .main-content {
      display: block;
      width: 80px;
      height: 80px;
      border-style: solid;
      border-color: none;
      border-radius: 5px;
      text-align: center;
    }
    .icon-center {
      display: inline-block;
      margin: auto;
      vertical-align: middle;
      margin-top: 20px;
      width: 30px;
      height:30px;
    }

	.mainContentSelected {
	border: none;
	outline: none;
	padding: ;
	background-color: none;
	cursor: pointer;
	font-size: 10px;
	}

	.active, .mainContentSelected:hover {
  	background-color: #b4bbc6;
  	color: white;
	}

	</style>
`;

    const dialog = $(`<dialog id="${id}">
    <form method="dialog">
    <div class="header">
        <h1>Shapely</h1>
        <img src="grid.png" class="logo">
        </div>
        <hr class="small" />
        <h3>Add icons and shapes without leaving XD in a couple of clicks.</h3>

        <div class="flex-popup" <!-- name and description with ruler -->


			<div id = "myDIV"></div>


          <!-- search -->

          <div>
            <label>
              <input id="search" type="text" placeholder="Search for icons and shapes" autofocus="true" />
            </label>
          </div>




          <!-- sidebar and main content -->

          <div class="column">

            <!-- top filters -->

            <h3>Filters</h3>

            <section id="icon_types" class="row wide">
            
              <button id="icon_type_all" data-iconTypeButton="" uxp-variant="secondary" uxp-quiet="true">ALL</button>
              <button id="icon_type_material" data-iconTypeButton="material" uxp-variant="secondary" uxp-quiet="true" title="Material Icons and many more">Material</button>
              <button id="icon_type_open_iconic" data-iconTypeButton="open_iconic" uxp-variant="secondary" uxp-quiet="true">Open Iconic</button>
              <button id="icon_type_nova" data-iconTypeButton="nova" uxp-variant="secondary" uxp-quiet="true">Nova</button>
              <button id="icon_type_feather" data-iconTypeButton="feather" uxp-variant="secondary" uxp-quiet="true">Feather</button>

            </section>

            <!-- icons and shapes area -->

            <div class="main-area border-backgr">
            
                <div id="image_grid" class="flex">
    
    
                </div>
            </div>




          <!-- footer with buttons and checkbox -->
          <hr class="small" />
          <label>
            <span title="The shape will be added on selected artboard">Target Artboard</span>
            <select>
              <option value="artboard-1">Icon</option>
              <option value="artboard-2">Thumbnail</option>
              <option value="artboard-3">Preview</option>
            </select>
          </label>

          <hr class="small" />
          <h3>Options</h3>

          <label class="row">
            <input type="checkbox" id="checkbox_do_not_close_dialog" />
            <span>Do not close the window on Add</span>
          </label>
          <hr class="small" />
          <!-- buttons -->

        </div>

        <footer>
        <button uxp-variant="cta" type="submit" id="ok" class="">Add to artboard</button>
      <!-- <h3 class="center">Press "esc" to close the window</h3> -->

        <button id="cancel">Close</button>
        </footer>
    </form>
</dialog>`).get(1);

    $(document.body).append(dialog);

    const [form, cancel, ok] =
        [`${sel} form`, "#cancel", "#ok"].map(s => document.querySelector(s));

    const imageGrid = $("#image_grid");
    const searchInput = $("#search");

    const submit = () => {

        console.log(selectedImageEntry.name);
        if (!selectedImageEntry) return;

        const newElement = new Rectangle(); // [3]
        newElement.width = 48;
        newElement.height = 48;

        let fill = new ImageFill(selectedImageEntry);

        //Set fill of first selected item
        newElement.fill = fill;

        selection.insertionParent.addChild(newElement); // [4]
        newElement.moveInParentCoordinates(100, 100);

        if (isDialogClosingOnAdd)
            dialog.close();
    };

    $('.main-area').on('scroll', (async function () {
        let offset = imageGrid.children().length;
        let parent_div = document.querySelector('.main-area');

        console.log(parent_div.scrollHeight, $(this).scrollTop(), offset);
        if ($(this).scrollTop() >= parent_div.scrollHeight - 300) { // bad style! why 300??
            if (isLoading) return;
            console.log("load more")
            loadIcons(offset, PAGE_SIZE)
                .then(results => drawResults(results))
        }
    }));

    $("#checkbox_do_not_close_dialog").change(function () {
        isDialogClosingOnAdd = !($(this).is(':checked'));
    });

    form.onsubmit = submit;
    cancel.onclick = () => dialog.close();

    $("#icon_type_all").on('click', function(){
        onIconsTypeChanged();
        $("[id^=icon_type]").removeClass('active');
        $(this).addClass("active");
    });
    $("#icon_type_material").on('click', function() {
        onIconsTypeChanged(C.ICON_TYPE.material);
        $("[id^=icon_type]").removeClass('active');
        $(this).addClass("active");
    });
    $("#icon_type_open_iconic").on('click', function() {
        onIconsTypeChanged(C.ICON_TYPE.open_iconic);
        $("[id^=icon_type]").removeClass('active');
        $(this).addClass("active");
    });
    $("#icon_type_nova").on('click', function(){
        onIconsTypeChanged(C.ICON_TYPE.nova);
        $("[id^=icon_type]").removeClass('active');
        $(this).addClass("active");
    });
    $("#icon_type_feather").on('click', function() {
        onIconsTypeChanged(C.ICON_TYPE.feather);
        $("[id^=icon_type]").removeClass('active');
        $(this).addClass("active");
    });

    function onIconsTypeChanged(iconType) {
        selectedIconType = iconType;
        loadIcons(0, PAGE_SIZE)
            .then(drawResults);
    }

    searchInput.on('input', () => {
        loadIcons(0, PAGE_SIZE)
            .then(drawResults);
    });

    function drawResults(icons) {
        for (let entry of icons) {
            // console.log(entry.name, entry.url);

            // let img_node = document.createElement("object");
            // img_node.setAttribute("data", entry.url);
            // img_node.setAttribute("type", "image/svg+xml");

            let node = $(
                '<div class="mainContentSelected main-content">' +
                '<img id="img" src="' + entry.url + '" class="icon-center" data-iconType="' + entry.iconType.type + '">' +
                // '<object data="'+entry.url+'" type="image/svg+xml"></object>'+
                '<h3>' + entry.name + '</h3></div>');

            imageGrid.append(node);

            node.on('click', function () {
                $('.mainContentSelected').removeClass('active');
                node.addClass("active");

                selectedImageEntry = entry; // save selected locally
            });
            // var draw = SVG('drawing').use('img', entry.url)

        }
        isLoading = false;

    }

    async function loadIcons(offset, limit) {
        isLoading = true;
        if (offset == 0)
            imageGrid.empty(); // first clear all images

        return await Utl.loadIcons(offset, limit, searchInput.val(), selectedIconType);
    }

    function init() {
        $("#checkbox_do_not_close_dialog").prop('checked', !isDialogClosingOnAdd);

        if (!!selectedIconType)
            $("#icon_type_"+selectedIconType.type).addClass("active"); // todo not working
        else
            $("#icon_type_all").addClass("active");

        loadIcons(0, PAGE_SIZE)
            .then(drawResults);

    }

    init();

    return dialog;
}


async function menuCommand(selection) {

    const dialog = await createDialog(selection);
    return dialog.showModal();
}

module.exports = {
    commands: {
        menuCommand
    }
};