//  temporary shim until setTimeout is added to XD
global.setTimeout = (fn) => fn;
global.clearTimeout = (fn) => {
}

const ImageFill = require("scenegraph").ImageFill;
const Utl = require("./Utils.js");
const SVG = require("./svg.js");
const $ = require("./jquery");
const Cosnt = require("./Const");

const {
    Rectangle,
    Color
} = require("scenegraph");


async function createDialog(selection, id = "dialog") {
    let selectedImageEntry;

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
            
              <button id="icon_type_all" uxp-variant="secondary" uxp-quiet="true">ALL</button>
              <button id="icon_type_material" uxp-variant="secondary" uxp-quiet="true" title="Material Icons and many more">Material</button>
              <button id="icon_type_open_iconic" uxp-variant="secondary" uxp-quiet="true">Open Iconic</button>
              <button id="icon_type_nova" uxp-variant="secondary" uxp-quiet="true">Nova</button>
              <button id="icon_type_feather" uxp-variant="secondary" uxp-quiet="true">Feather</button>

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
            <input type="checkbox" />
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

    const [form, cancel, ok, search, icon_type_all, icon_type_material, icon_type_open_iconic, icon_type_nova, icon_type_feather] =
        [`${sel} form`, "#cancel", "#ok", "#search", '#icon_type_all', '#icon_type_material',
            '#icon_type_open_iconic', '#icon_type_nova', '#icon_type_feather'].map(s => document.querySelector(s));

    const imageGrid = $("image_grid");
    const searchInput = $("#search");

    const submit = () => {

        console.log(selectedImageEntry.name)
        if (!selectedImageEntry) return;

        const newElement = new Rectangle(); // [3]
        newElement.width = 48;
        newElement.height = 48;

        let fill = new ImageFill(selectedImageEntry);

        //Set fill of first selected item
        newElement.fill = fill;

        selection.insertionParent.addChild(newElement); // [4]
        newElement.moveInParentCoordinates(100, 100);

        dialog.close();
    };

    form.onsubmit = submit;
    cancel.onclick = () => dialog.close();

    function onIconsTypeChanged(iconType) {
        loadImages(searchInput.val(), iconType)
    };

    searchInput.on('input', () => {
        loadImages(searchInput.val(),)
    });

    imageGrid.scroll(function () {
        console.log(imageGrid.height(), imageGrid.scrollTop())
        // if ($(window). == $(document).height() - $(window).height()) {
        //     // ajax call get data from server and append to the div
        // }
    });

    async function loadImages(searchText, iconType) {
        const image_grid = document.getElementById("image_grid");

        image_grid.innerHTML = ''; // first clear all images

        // const entries = await Utl.getLocalFiles('images');
        const entries = await Utl.getLocalFiles('Icons/Material');
        if (!iconType || iconType == "") {
        }
        // entries.filter(entry => entry.name.startsWith(searchText.trim()));

        entries.forEach(entry => {
            // console.log(entry.name, entry.url);

            let node = document.createElement("div");
            // let img_node = document.createElement("object");
            // img_node.setAttribute("data", entry.url);
            // img_node.setAttribute("type", "image/svg+xml");

            node.innerHTML =
                '<div class="mainContentSelected main-content">' +
                '<img id="img" src="' + entry.url + '" class="icon-center" data-iconType="' + iconType + '">' +
                // '<object data="'+entry.url+'" type="image/svg+xml"></object>'+
                '<h3>' + entry.name + '</h3></div>';

            node.addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";

                selectedImageEntry = entry; // save selected locally
            });

            // node.appendChild(img_node);
            image_grid.appendChild(node);
            // var draw = SVG('drawing').use('img', entry.url)

        });


    }

    (async function () {
        await loadImages();
    })();

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