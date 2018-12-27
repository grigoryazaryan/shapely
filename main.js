const $ = sel => document.querySelector(sel);
const {
  Rectangle,
  Color
} = require("scenegraph");

function createDialog(selection, id = "dialog") {
  const sel = `#${id}`;
  let dialog = document.querySelector(sel);
  if (dialog) {
    return dialog;
  }

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
	<dialog id="${id}">
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
              <input type="text" placeholder="Search for icons and shapes" autofocus="true" />
            </label>
          </div>




          <!-- sidebar and main content -->

          <div class="column">

            <!-- top filters -->

            <h3>Filters</h3>

            <section class="row wide">

              <button uxp-variant="secondary" uxp-quiet="true">ALL</button>
              <button uxp-variant="secondary" uxp-quiet="true" title="Material Icons and many more">Icons</button>
              <button uxp-variant="secondary" uxp-quiet="true">Shapes</button>

            </section>

            <!-- icons and shapes area -->

            <div class="main-area border-backgr">

            <div id="image_grid" class="flex">


            <div class="mainContentSelected main-content"><img src="3d_rotation.png" class="icon-center">
              <h3>3d_rotation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="ac_unit.png" class="icon-center">
              <h3>ac_unit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="access_alarm.png" class="icon-center">
              <h3>access_alarm</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="access_alarms.png" class="icon-center">
              <h3>access_alarms</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="access_time.png" class="icon-center">
              <h3>access_time</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="accessibility.png" class="icon-center">
              <h3>accessibility</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="accessible.png" class="icon-center">
              <h3>accessible</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="account_balance_wallet.png" class="icon-center">
              <h3>account_balance_wallet</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="account_balance.png" class="icon-center">
              <h3>account_balance</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="account_box.png" class="icon-center">
              <h3>account_box</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="account_circle.png" class="icon-center">
              <h3>account_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="adb.png" class="icon-center">
              <h3>adb</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_a_photo.png" class="icon-center">
              <h3>add_a_photo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_alarm.png" class="icon-center">
              <h3>add_alarm</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_alert.png" class="icon-center">
              <h3>add_alert</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_box.png" class="icon-center">
              <h3>add_box</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_circle_outline.png" class="icon-center">
              <h3>add_circle_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_circle.png" class="icon-center">
              <h3>add_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_location.png" class="icon-center">
              <h3>add_location</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_shopping_cart.png" class="icon-center">
              <h3>add_shopping_cart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_to_photos.png" class="icon-center">
              <h3>add_to_photos</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add_to_queue.png" class="icon-center">
              <h3>add_to_queue</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="add.png" class="icon-center">
              <h3>add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="adjust.png" class="icon-center">
              <h3>adjust</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_flat_angled.png" class="icon-center">
              <h3>airline_seat_flat_angled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_flat.png" class="icon-center">
              <h3>airline_seat_flat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_individual_suite.png" class="icon-center">
              <h3>airline_seat_individual_suite</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_legroom_extra.png" class="icon-center">
              <h3>airline_seat_legroom_extra</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_legroom_normal.png" class="icon-center">
              <h3>airline_seat_legroom_normal</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_legroom_reduced.png" class="icon-center">
              <h3>airline_seat_legroom_reduced</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_recline_extra.png" class="icon-center">
              <h3>airline_seat_recline_extra</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airline_seat_recline_normal.png" class="icon-center">
              <h3>airline_seat_recline_normal</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airplanemode_active.png" class="icon-center">
              <h3>airplanemode_active</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airplanemode_inactive.png" class="icon-center">
              <h3>airplanemode_inactive</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airplay.png" class="icon-center">
              <h3>airplay</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="airport_shuttle.png" class="icon-center">
              <h3>airport_shuttle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="alarm_add.png" class="icon-center">
              <h3>alarm_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="alarm_off.png" class="icon-center">
              <h3>alarm_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="alarm_on.png" class="icon-center">
              <h3>alarm_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="alarm.png" class="icon-center">
              <h3>alarm</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="album.png" class="icon-center">
              <h3>album</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="all_inclusive.png" class="icon-center">
              <h3>all_inclusive</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="all_out.png" class="icon-center">
              <h3>all_out</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="android.png" class="icon-center">
              <h3>android</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="announcement.png" class="icon-center">
              <h3>announcement</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="apps.png" class="icon-center">
              <h3>apps</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="archive.png" class="icon-center">
              <h3>archive</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_back.png" class="icon-center">
              <h3>arrow_back</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_downward.png" class="icon-center">
              <h3>arrow_downward</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_drop_down_circle.png" class="icon-center">
              <h3>arrow_drop_down_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_drop_down.png" class="icon-center">
              <h3>arrow_drop_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_drop_up.png" class="icon-center">
              <h3>arrow_drop_up</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_forward.png" class="icon-center">
              <h3>arrow_forward</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="arrow_upward.png" class="icon-center">
              <h3>arrow_upward</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="art_track.png" class="icon-center">
              <h3>art_track</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="aspect_ratio.png" class="icon-center">
              <h3>aspect_ratio</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assessment.png" class="icon-center">
              <h3>assessment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment_ind.png" class="icon-center">
              <h3>assignment_ind</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment_late.png" class="icon-center">
              <h3>assignment_late</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment_return.png" class="icon-center">
              <h3>assignment_return</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment_returned.png" class="icon-center">
              <h3>assignment_returned</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment_turned_in.png" class="icon-center">
              <h3>assignment_turned_in</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assignment.png" class="icon-center">
              <h3>assignment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assistant_photo.png" class="icon-center">
              <h3>assistant_photo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="assistant.png" class="icon-center">
              <h3>assistant</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="attach_file.png" class="icon-center">
              <h3>attach_file</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="attach_money.png" class="icon-center">
              <h3>attach_money</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="attachment.png" class="icon-center">
              <h3>attachment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="audiotrack.png" class="icon-center">
              <h3>audiotrack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="autorenew.png" class="icon-center">
              <h3>autorenew</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="av_timer.png" class="icon-center">
              <h3>av_timer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="backspace.png" class="icon-center">
              <h3>backspace</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="backup.png" class="icon-center">
              <h3>backup</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_20.png" class="icon-center">
              <h3>battery_20</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_30.png" class="icon-center">
              <h3>battery_30</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_50.png" class="icon-center">
              <h3>battery_50</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_60.png" class="icon-center">
              <h3>battery_60</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_80.png" class="icon-center">
              <h3>battery_80</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_90.png" class="icon-center">
              <h3>battery_90</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_alert.png" class="icon-center">
              <h3>battery_alert</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_20.png" class="icon-center">
              <h3>battery_charging_20</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_30.png" class="icon-center">
              <h3>battery_charging_30</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_50.png" class="icon-center">
              <h3>battery_charging_50</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_60.png" class="icon-center">
              <h3>battery_charging_60</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_80.png" class="icon-center">
              <h3>battery_charging_80</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_90.png" class="icon-center">
              <h3>battery_charging_90</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_charging_full.png" class="icon-center">
              <h3>battery_charging_full</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_full.png" class="icon-center">
              <h3>battery_full</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_std.png" class="icon-center">
              <h3>battery_std</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="battery_unknown.png" class="icon-center">
              <h3>battery_unknown</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="beach_access.png" class="icon-center">
              <h3>beach_access</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="beenhere.png" class="icon-center">
              <h3>beenhere</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="block.png" class="icon-center">
              <h3>block</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bluetooth_audio.png" class="icon-center">
              <h3>bluetooth_audio</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bluetooth_connected.png" class="icon-center">
              <h3>bluetooth_connected</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bluetooth_disabled.png" class="icon-center">
              <h3>bluetooth_disabled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bluetooth_searching.png" class="icon-center">
              <h3>bluetooth_searching</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bluetooth.png" class="icon-center">
              <h3>bluetooth</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="blur_circular.png" class="icon-center">
              <h3>blur_circular</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="blur_linear.png" class="icon-center">
              <h3>blur_linear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="blur_off.png" class="icon-center">
              <h3>blur_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="blur_on.png" class="icon-center">
              <h3>blur_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="book.png" class="icon-center">
              <h3>book</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bookmark_border.png" class="icon-center">
              <h3>bookmark_border</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bookmark.png" class="icon-center">
              <h3>bookmark</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_all.png" class="icon-center">
              <h3>border_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_bottom.png" class="icon-center">
              <h3>border_bottom</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_clear.png" class="icon-center">
              <h3>border_clear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_color.png" class="icon-center">
              <h3>border_color</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_horizontal.png" class="icon-center">
              <h3>border_horizontal</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_inner.png" class="icon-center">
              <h3>border_inner</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_left.png" class="icon-center">
              <h3>border_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_outer.png" class="icon-center">
              <h3>border_outer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_right.png" class="icon-center">
              <h3>border_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_style.png" class="icon-center">
              <h3>border_style</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_top.png" class="icon-center">
              <h3>border_top</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="border_vertical.png" class="icon-center">
              <h3>border_vertical</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="branding_watermark.png" class="icon-center">
              <h3>branding_watermark</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_1.png" class="icon-center">
              <h3>brightness_1</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_2.png" class="icon-center">
              <h3>brightness_2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_3.png" class="icon-center">
              <h3>brightness_3</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_4.png" class="icon-center">
              <h3>brightness_4</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_5.png" class="icon-center">
              <h3>brightness_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_6.png" class="icon-center">
              <h3>brightness_6</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_7.png" class="icon-center">
              <h3>brightness_7</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_auto.png" class="icon-center">
              <h3>brightness_auto</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_high.png" class="icon-center">
              <h3>brightness_high</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_low.png" class="icon-center">
              <h3>brightness_low</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brightness_medium.png" class="icon-center">
              <h3>brightness_medium</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="broken_image.png" class="icon-center">
              <h3>broken_image</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="brush.png" class="icon-center">
              <h3>brush</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bubble_chart.png" class="icon-center">
              <h3>bubble_chart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="bug_report.png" class="icon-center">
              <h3>bug_report</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="build.png" class="icon-center">
              <h3>build</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="burst_mode.png" class="icon-center">
              <h3>burst_mode</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="business_center.png" class="icon-center">
              <h3>business_center</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="business.png" class="icon-center">
              <h3>business</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cached.png" class="icon-center">
              <h3>cached</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cake.png" class="icon-center">
              <h3>cake</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_end.png" class="icon-center">
              <h3>call_end</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_made.png" class="icon-center">
              <h3>call_made</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_merge.png" class="icon-center">
              <h3>call_merge</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_missed_outgoing.png" class="icon-center">
              <h3>call_missed_outgoing</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_missed.png" class="icon-center">
              <h3>call_missed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_received.png" class="icon-center">
              <h3>call_received</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_split.png" class="icon-center">
              <h3>call_split</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call_to_action.png" class="icon-center">
              <h3>call_to_action</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="call.png" class="icon-center">
              <h3>call</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera_alt.png" class="icon-center">
              <h3>camera_alt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera_enhance.png" class="icon-center">
              <h3>camera_enhance</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera_front.png" class="icon-center">
              <h3>camera_front</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera_rear.png" class="icon-center">
              <h3>camera_rear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera_roll.png" class="icon-center">
              <h3>camera_roll</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="camera.png" class="icon-center">
              <h3>camera</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cancel.png" class="icon-center">
              <h3>cancel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="card_giftcard.png" class="icon-center">
              <h3>card_giftcard</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="card_membership.png" class="icon-center">
              <h3>card_membership</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="card_travel.png" class="icon-center">
              <h3>card_travel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="casino.png" class="icon-center">
              <h3>casino</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cast_connected.png" class="icon-center">
              <h3>cast_connected</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cast.png" class="icon-center">
              <h3>cast</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="center_focus_strong.png" class="icon-center">
              <h3>center_focus_strong</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="center_focus_weak.png" class="icon-center">
              <h3>center_focus_weak</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="change_history.png" class="icon-center">
              <h3>change_history</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chat_bubble_outline.png" class="icon-center">
              <h3>chat_bubble_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chat_bubble.png" class="icon-center">
              <h3>chat_bubble</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chat.png" class="icon-center">
              <h3>chat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="check_12dp.png" class="icon-center">
              <h3>check_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="check_circle.png" class="icon-center">
              <h3>check_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="check.png" class="icon-center">
              <h3>check</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chevron_left.png" class="icon-center">
              <h3>chevron_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chevron_right.png" class="icon-center">
              <h3>chevron_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="child_care.png" class="icon-center">
              <h3>child_care</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="child_friendly.png" class="icon-center">
              <h3>child_friendly</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="chrome_reader_mode.png" class="icon-center">
              <h3>chrome_reader_mode</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="class.png" class="icon-center">
              <h3>class</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="clear_all.png" class="icon-center">
              <h3>clear_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="clear.png" class="icon-center">
              <h3>clear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_16dp.png" class="icon-center">
              <h3>close_16dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_32dp.png" class="icon-center">
              <h3>close_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_64dp.png" class="icon-center">
              <h3>close_64dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_128dp.png" class="icon-center">
              <h3>close_128dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_256dp.png" class="icon-center">
              <h3>close_256dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close_512dp.png" class="icon-center">
              <h3>close_512dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="close.png" class="icon-center">
              <h3>close</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="closed_caption.png" class="icon-center">
              <h3>closed_caption</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_circle.png" class="icon-center">
              <h3>cloud_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_done.png" class="icon-center">
              <h3>cloud_done</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_download.png" class="icon-center">
              <h3>cloud_download</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_off.png" class="icon-center">
              <h3>cloud_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_queue.png" class="icon-center">
              <h3>cloud_queue</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud_upload.png" class="icon-center">
              <h3>cloud_upload</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="cloud.png" class="icon-center">
              <h3>cloud</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="code.png" class="icon-center">
              <h3>code</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="collections_bookmark.png" class="icon-center">
              <h3>collections_bookmark</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="collections.png" class="icon-center">
              <h3>collections</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="color_lens.png" class="icon-center">
              <h3>color_lens</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="colorize.png" class="icon-center">
              <h3>colorize</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="comment.png" class="icon-center">
              <h3>comment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="compare_arrows.png" class="icon-center">
              <h3>compare_arrows</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="compare.png" class="icon-center">
              <h3>compare</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="computer.png" class="icon-center">
              <h3>computer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="confirmation_number.png" class="icon-center">
              <h3>confirmation_number</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="contact_mail.png" class="icon-center">
              <h3>contact_mail</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="contact_phone.png" class="icon-center">
              <h3>contact_phone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="contacts.png" class="icon-center">
              <h3>contacts</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="content_copy.png" class="icon-center">
              <h3>content_copy</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="content_cut.png" class="icon-center">
              <h3>content_cut</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="content_paste.png" class="icon-center">
              <h3>content_paste</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="control_point_duplicate.png" class="icon-center">
              <h3>control_point_duplicate</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="control_point.png" class="icon-center">
              <h3>control_point</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="copyright.png" class="icon-center">
              <h3>copyright</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="create_new_folder.png" class="icon-center">
              <h3>create_new_folder</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="create.png" class="icon-center">
              <h3>create</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="credit_card.png" class="icon-center">
              <h3>credit_card</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_3_2.png" class="icon-center">
              <h3>crop_3_2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_5_4.png" class="icon-center">
              <h3>crop_5_4</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_7_5.png" class="icon-center">
              <h3>crop_7_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_16_9.png" class="icon-center">
              <h3>crop_16_9</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_din.png" class="icon-center">
              <h3>crop_din</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_free.png" class="icon-center">
              <h3>crop_free</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_landscape.png" class="icon-center">
              <h3>crop_landscape</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_original.png" class="icon-center">
              <h3>crop_original</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_portrait.png" class="icon-center">
              <h3>crop_portrait</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_rotate.png" class="icon-center">
              <h3>crop_rotate</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop_square.png" class="icon-center">
              <h3>crop_square</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="crop.png" class="icon-center">
              <h3>crop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dashboard.png" class="icon-center">
              <h3>dashboard</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="data_usage.png" class="icon-center">
              <h3>data_usage</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="date_range.png" class="icon-center">
              <h3>date_range</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dehaze.png" class="icon-center">
              <h3>dehaze</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="delete_forever.png" class="icon-center">
              <h3>delete_forever</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="delete_sweep.png" class="icon-center">
              <h3>delete_sweep</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="delete.png" class="icon-center">
              <h3>delete</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="description.png" class="icon-center">
              <h3>description</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="desktop_mac.png" class="icon-center">
              <h3>desktop_mac</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="desktop_windows.png" class="icon-center">
              <h3>desktop_windows</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="details.png" class="icon-center">
              <h3>details</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="developer_board.png" class="icon-center">
              <h3>developer_board</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="developer_mode.png" class="icon-center">
              <h3>developer_mode</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="device_hub.png" class="icon-center">
              <h3>device_hub</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="devices_other.png" class="icon-center">
              <h3>devices_other</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="devices.png" class="icon-center">
              <h3>devices</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dialer_sip.png" class="icon-center">
              <h3>dialer_sip</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dialpad.png" class="icon-center">
              <h3>dialpad</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_bike.png" class="icon-center">
              <h3>directions_bike</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_boat.png" class="icon-center">
              <h3>directions_boat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_bus.png" class="icon-center">
              <h3>directions_bus</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_car_12dp.png" class="icon-center">
              <h3>directions_car_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_car.png" class="icon-center">
              <h3>directions_car</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_railway.png" class="icon-center">
              <h3>directions_railway</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_run.png" class="icon-center">
              <h3>directions_run</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_subway.png" class="icon-center">
              <h3>directions_subway</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_transit.png" class="icon-center">
              <h3>directions_transit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions_walk.png" class="icon-center">
              <h3>directions_walk</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="directions.png" class="icon-center">
              <h3>directions</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="disc_full.png" class="icon-center">
              <h3>disc_full</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dns.png" class="icon-center">
              <h3>dns</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="do_not_disturb_alt.png" class="icon-center">
              <h3>do_not_disturb_alt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="do_not_disturb_off.png" class="icon-center">
              <h3>do_not_disturb_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="do_not_disturb_on.png" class="icon-center">
              <h3>do_not_disturb_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="do_not_disturb.png" class="icon-center">
              <h3>do_not_disturb</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dock.png" class="icon-center">
              <h3>dock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="domain.png" class="icon-center">
              <h3>domain</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_16dp.png" class="icon-center">
              <h3>done_16dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_32dp.png" class="icon-center">
              <h3>done_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_64dp.png" class="icon-center">
              <h3>done_64dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_128dp.png" class="icon-center">
              <h3>done_128dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_256dp.png" class="icon-center">
              <h3>done_256dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_512dp.png" class="icon-center">
              <h3>done_512dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done_all.png" class="icon-center">
              <h3>done_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="done.png" class="icon-center">
              <h3>done</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="donut_large.png" class="icon-center">
              <h3>donut_large</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="donut_small.png" class="icon-center">
              <h3>donut_small</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="drafts.png" class="icon-center">
              <h3>drafts</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="drag_handle.png" class="icon-center">
              <h3>drag_handle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="drive_eta.png" class="icon-center">
              <h3>drive_eta</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="dvr.png" class="icon-center">
              <h3>dvr</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="edit_location.png" class="icon-center">
              <h3>edit_location</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="edit.png" class="icon-center">
              <h3>edit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="eject.png" class="icon-center">
              <h3>eject</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="email_12dp.png" class="icon-center">
              <h3>email_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="email.png" class="icon-center">
              <h3>email</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="enhanced_encryption.png" class="icon-center">
              <h3>enhanced_encryption</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="equalizer.png" class="icon-center">
              <h3>equalizer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="error_outline.png" class="icon-center">
              <h3>error_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="error.png" class="icon-center">
              <h3>error</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="euro_symbol.png" class="icon-center">
              <h3>euro_symbol</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="ev_station.png" class="icon-center">
              <h3>ev_station</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event_12dp.png" class="icon-center">
              <h3>event_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event_available.png" class="icon-center">
              <h3>event_available</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event_busy.png" class="icon-center">
              <h3>event_busy</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event_note.png" class="icon-center">
              <h3>event_note</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event_seat.png" class="icon-center">
              <h3>event_seat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="event.png" class="icon-center">
              <h3>event</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exit_to_app.png" class="icon-center">
              <h3>exit_to_app</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="expand_less.png" class="icon-center">
              <h3>expand_less</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="expand_more.png" class="icon-center">
              <h3>expand_more</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="explicit.png" class="icon-center">
              <h3>explicit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="explore.png" class="icon-center">
              <h3>explore</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure_neg_1.png" class="icon-center">
              <h3>exposure_neg_1</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure_neg_2.png" class="icon-center">
              <h3>exposure_neg_2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure_plus_1.png" class="icon-center">
              <h3>exposure_plus_1</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure_plus_2.png" class="icon-center">
              <h3>exposure_plus_2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure_zero.png" class="icon-center">
              <h3>exposure_zero</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="exposure.png" class="icon-center">
              <h3>exposure</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="extension.png" class="icon-center">
              <h3>extension</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="face.png" class="icon-center">
              <h3>face</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fast_forward.png" class="icon-center">
              <h3>fast_forward</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fast_rewind.png" class="icon-center">
              <h3>fast_rewind</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="favorite_border.png" class="icon-center">
              <h3>favorite_border</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="favorite.png" class="icon-center">
              <h3>favorite</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="featured_play_list.png" class="icon-center">
              <h3>featured_play_list</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="featured_video.png" class="icon-center">
              <h3>featured_video</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="feedback.png" class="icon-center">
              <h3>feedback</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fiber_dvr.png" class="icon-center">
              <h3>fiber_dvr</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fiber_manual_record.png" class="icon-center">
              <h3>fiber_manual_record</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fiber_new.png" class="icon-center">
              <h3>fiber_new</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fiber_pin.png" class="icon-center">
              <h3>fiber_pin</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fiber_smart_record.png" class="icon-center">
              <h3>fiber_smart_record</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="file_download.png" class="icon-center">
              <h3>file_download</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="file_upload.png" class="icon-center">
              <h3>file_upload</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_1.png" class="icon-center">
              <h3>filter_1</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_2.png" class="icon-center">
              <h3>filter_2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_3.png" class="icon-center">
              <h3>filter_3</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_4.png" class="icon-center">
              <h3>filter_4</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_5.png" class="icon-center">
              <h3>filter_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_6.png" class="icon-center">
              <h3>filter_6</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_7.png" class="icon-center">
              <h3>filter_7</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_8.png" class="icon-center">
              <h3>filter_8</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_9_plus.png" class="icon-center">
              <h3>filter_9_plus</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_9.png" class="icon-center">
              <h3>filter_9</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_b_and_w.png" class="icon-center">
              <h3>filter_b_and_w</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_center_focus.png" class="icon-center">
              <h3>filter_center_focus</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_drama.png" class="icon-center">
              <h3>filter_drama</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_frames.png" class="icon-center">
              <h3>filter_frames</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_hdr.png" class="icon-center">
              <h3>filter_hdr</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_list.png" class="icon-center">
              <h3>filter_list</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_none.png" class="icon-center">
              <h3>filter_none</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_tilt_shift.png" class="icon-center">
              <h3>filter_tilt_shift</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter_vintage.png" class="icon-center">
              <h3>filter_vintage</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="filter.png" class="icon-center">
              <h3>filter</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="find_in_page.png" class="icon-center">
              <h3>find_in_page</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="find_replace.png" class="icon-center">
              <h3>find_replace</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fingerprint.png" class="icon-center">
              <h3>fingerprint</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="first_page.png" class="icon-center">
              <h3>first_page</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fitness_center.png" class="icon-center">
              <h3>fitness_center</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flag_32dp.png" class="icon-center">
              <h3>flag_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flag.png" class="icon-center">
              <h3>flag</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flare.png" class="icon-center">
              <h3>flare</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flash_auto.png" class="icon-center">
              <h3>flash_auto</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flash_off.png" class="icon-center">
              <h3>flash_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flash_on.png" class="icon-center">
              <h3>flash_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flight_12dp.png" class="icon-center">
              <h3>flight_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flight_land.png" class="icon-center">
              <h3>flight_land</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flight_takeoff.png" class="icon-center">
              <h3>flight_takeoff</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flight.png" class="icon-center">
              <h3>flight</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flip_to_back.png" class="icon-center">
              <h3>flip_to_back</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flip_to_front.png" class="icon-center">
              <h3>flip_to_front</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="flip.png" class="icon-center">
              <h3>flip</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="folder_open.png" class="icon-center">
              <h3>folder_open</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="folder_shared.png" class="icon-center">
              <h3>folder_shared</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="folder_special.png" class="icon-center">
              <h3>folder_special</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="folder.png" class="icon-center">
              <h3>folder</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="font_download.png" class="icon-center">
              <h3>font_download</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_align_center.png" class="icon-center">
              <h3>format_align_center</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_align_justify.png" class="icon-center">
              <h3>format_align_justify</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_align_left.png" class="icon-center">
              <h3>format_align_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_align_right.png" class="icon-center">
              <h3>format_align_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_bold.png" class="icon-center">
              <h3>format_bold</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_clear.png" class="icon-center">
              <h3>format_clear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_color_fill.png" class="icon-center">
              <h3>format_color_fill</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_color_reset.png" class="icon-center">
              <h3>format_color_reset</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_color_text.png" class="icon-center">
              <h3>format_color_text</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_indent_decrease.png" class="icon-center">
              <h3>format_indent_decrease</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_indent_increase.png" class="icon-center">
              <h3>format_indent_increase</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_italblack.png" class="icon-center">
              <h3>format_italblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_line_spacing.png" class="icon-center">
              <h3>format_line_spacing</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_list_bulleted.png" class="icon-center">
              <h3>format_list_bulleted</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_list_numbered.png" class="icon-center">
              <h3>format_list_numbered</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_paint.png" class="icon-center">
              <h3>format_paint</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_quote.png" class="icon-center">
              <h3>format_quote</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_shapes.png" class="icon-center">
              <h3>format_shapes</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_size.png" class="icon-center">
              <h3>format_size</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_strikethrough.png" class="icon-center">
              <h3>format_strikethrough</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_textdirection_l_to_r.png" class="icon-center">
              <h3>format_textdirection_l_to_r</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_textdirection_r_to_l.png" class="icon-center">
              <h3>format_textdirection_r_to_l</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="format_underlined.png" class="icon-center">
              <h3>format_underlined</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forum_32dp.png" class="icon-center">
              <h3>forum_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forum.png" class="icon-center">
              <h3>forum</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forward_5.png" class="icon-center">
              <h3>forward_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forward_10.png" class="icon-center">
              <h3>forward_10</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forward_30.png" class="icon-center">
              <h3>forward_30</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="forward.png" class="icon-center">
              <h3>forward</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="free_breakfast.png" class="icon-center">
              <h3>free_breakfast</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fullscreen_exit.png" class="icon-center">
              <h3>fullscreen_exit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="fullscreen.png" class="icon-center">
              <h3>fullscreen</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="functions.png" class="icon-center">
              <h3>functions</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="g_translate.png" class="icon-center">
              <h3>g_translate</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gamepad.png" class="icon-center">
              <h3>gamepad</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="games.png" class="icon-center">
              <h3>games</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gavel.png" class="icon-center">
              <h3>gavel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gesture.png" class="icon-center">
              <h3>gesture</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="get_app.png" class="icon-center">
              <h3>get_app</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gif.png" class="icon-center">
              <h3>gif</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="golf_course.png" class="icon-center">
              <h3>golf_course</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gps_fixed.png" class="icon-center">
              <h3>gps_fixed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gps_not_fixed.png" class="icon-center">
              <h3>gps_not_fixed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gps_off.png" class="icon-center">
              <h3>gps_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="grade.png" class="icon-center">
              <h3>grade</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="gradient.png" class="icon-center">
              <h3>gradient</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="grain.png" class="icon-center">
              <h3>grain</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="grapheq.png" class="icon-center">
              <h3>grapheq</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="grid_off.png" class="icon-center">
              <h3>grid_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="grid_on.png" class="icon-center">
              <h3>grid_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="group_32dp.png" class="icon-center">
              <h3>group_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="group_add.png" class="icon-center">
              <h3>group_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="group_work.png" class="icon-center">
              <h3>group_work</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="group.png" class="icon-center">
              <h3>group</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hd.png" class="icon-center">
              <h3>hd</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hdr_off.png" class="icon-center">
              <h3>hdr_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hdr_on.png" class="icon-center">
              <h3>hdr_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hdr_strong.png" class="icon-center">
              <h3>hdr_strong</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hdr_weak.png" class="icon-center">
              <h3>hdr_weak</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="headset_mblack.png" class="icon-center">
              <h3>headset_mblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="headset.png" class="icon-center">
              <h3>headset</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="healing.png" class="icon-center">
              <h3>healing</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hearing.png" class="icon-center">
              <h3>hearing</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="help_outline.png" class="icon-center">
              <h3>help_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="help.png" class="icon-center">
              <h3>help</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="high_quality.png" class="icon-center">
              <h3>high_quality</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="highlight_off.png" class="icon-center">
              <h3>highlight_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="highlight.png" class="icon-center">
              <h3>highlight</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="history.png" class="icon-center">
              <h3>history</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="home.png" class="icon-center">
              <h3>home</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hot_tub.png" class="icon-center">
              <h3>hot_tub</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hotel_12dp.png" class="icon-center">
              <h3>hotel_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hotel.png" class="icon-center">
              <h3>hotel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hourglass_empty.png" class="icon-center">
              <h3>hourglass_empty</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="hourglass_full.png" class="icon-center">
              <h3>hourglass_full</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="http.png" class="icon-center">
              <h3>http</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="https.png" class="icon-center">
              <h3>https</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="image_aspect_ratio.png" class="icon-center">
              <h3>image_aspect_ratio</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="image.png" class="icon-center">
              <h3>image</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="import_contacts.png" class="icon-center">
              <h3>import_contacts</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="import_export.png" class="icon-center">
              <h3>import_export</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="important_devices.png" class="icon-center">
              <h3>important_devices</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="inbox.png" class="icon-center">
              <h3>inbox</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="info_outline.png" class="icon-center">
              <h3>info_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="info.png" class="icon-center">
              <h3>info</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="input.png" class="icon-center">
              <h3>input</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_chart.png" class="icon-center">
              <h3>insert_chart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_comment.png" class="icon-center">
              <h3>insert_comment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_drive_file.png" class="icon-center">
              <h3>insert_drive_file</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_emoticon.png" class="icon-center">
              <h3>insert_emoticon</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_invitation.png" class="icon-center">
              <h3>insert_invitation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_link.png" class="icon-center">
              <h3>insert_link</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="insert_photo.png" class="icon-center">
              <h3>insert_photo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="invert_colors_off.png" class="icon-center">
              <h3>invert_colors_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="invert_colors.png" class="icon-center">
              <h3>invert_colors</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="iso.png" class="icon-center">
              <h3>iso</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_arrow_down.png" class="icon-center">
              <h3>keyboard_arrow_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_arrow_left.png" class="icon-center">
              <h3>keyboard_arrow_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_arrow_right.png" class="icon-center">
              <h3>keyboard_arrow_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_arrow_up.png" class="icon-center">
              <h3>keyboard_arrow_up</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_backspace.png" class="icon-center">
              <h3>keyboard_backspace</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_capslock.png" class="icon-center">
              <h3>keyboard_capslock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_hide.png" class="icon-center">
              <h3>keyboard_hide</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_return.png" class="icon-center">
              <h3>keyboard_return</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_tab.png" class="icon-center">
              <h3>keyboard_tab</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard_voice.png" class="icon-center">
              <h3>keyboard_voice</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="keyboard.png" class="icon-center">
              <h3>keyboard</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="kitchen.png" class="icon-center">
              <h3>kitchen</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="label_outline.png" class="icon-center">
              <h3>label_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="label.png" class="icon-center">
              <h3>label</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="landscape.png" class="icon-center">
              <h3>landscape</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="language.png" class="icon-center">
              <h3>language</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="laptop_chromebook.png" class="icon-center">
              <h3>laptop_chromebook</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="laptop_mac.png" class="icon-center">
              <h3>laptop_mac</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="laptop_windows.png" class="icon-center">
              <h3>laptop_windows</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="laptop.png" class="icon-center">
              <h3>laptop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="last_page.png" class="icon-center">
              <h3>last_page</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="launch.png" class="icon-center">
              <h3>launch</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="layers_clear.png" class="icon-center">
              <h3>layers_clear</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="layers.png" class="icon-center">
              <h3>layers</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="leak_add.png" class="icon-center">
              <h3>leak_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="leak_remove.png" class="icon-center">
              <h3>leak_remove</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="lens.png" class="icon-center">
              <h3>lens</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="library_add.png" class="icon-center">
              <h3>library_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="library_books.png" class="icon-center">
              <h3>library_books</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="library_musblack.png" class="icon-center">
              <h3>library_musblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="lightbulb_outline.png" class="icon-center">
              <h3>lightbulb_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="line_style.png" class="icon-center">
              <h3>line_style</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="line_weight.png" class="icon-center">
              <h3>line_weight</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="linear_scale.png" class="icon-center">
              <h3>linear_scale</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="link.png" class="icon-center">
              <h3>link</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="linked_camera.png" class="icon-center">
              <h3>linked_camera</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="list.png" class="icon-center">
              <h3>list</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="live_help.png" class="icon-center">
              <h3>live_help</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="live_tv.png" class="icon-center">
              <h3>live_tv</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_activity_12dp.png" class="icon-center">
              <h3>local_activity_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_activity.png" class="icon-center">
              <h3>local_activity</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_airport.png" class="icon-center">
              <h3>local_airport</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_atm.png" class="icon-center">
              <h3>local_atm</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_bar.png" class="icon-center">
              <h3>local_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_cafe.png" class="icon-center">
              <h3>local_cafe</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_car_wash.png" class="icon-center">
              <h3>local_car_wash</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_convenience_store.png" class="icon-center">
              <h3>local_convenience_store</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_dining_12dp.png" class="icon-center">
              <h3>local_dining_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_dining.png" class="icon-center">
              <h3>local_dining</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_drink.png" class="icon-center">
              <h3>local_drink</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_florist.png" class="icon-center">
              <h3>local_florist</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_gas_station.png" class="icon-center">
              <h3>local_gas_station</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_grocery_store.png" class="icon-center">
              <h3>local_grocery_store</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_hospital.png" class="icon-center">
              <h3>local_hospital</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_hotel.png" class="icon-center">
              <h3>local_hotel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_laundry_service.png" class="icon-center">
              <h3>local_laundry_service</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_library.png" class="icon-center">
              <h3>local_library</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_mall.png" class="icon-center">
              <h3>local_mall</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_movies.png" class="icon-center">
              <h3>local_movies</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_offer_32dp.png" class="icon-center">
              <h3>local_offer_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_offer.png" class="icon-center">
              <h3>local_offer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_parking.png" class="icon-center">
              <h3>local_parking</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_pharmacy.png" class="icon-center">
              <h3>local_pharmacy</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_phone.png" class="icon-center">
              <h3>local_phone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_pizza.png" class="icon-center">
              <h3>local_pizza</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_play.png" class="icon-center">
              <h3>local_play</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_post_office.png" class="icon-center">
              <h3>local_post_office</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_printshop.png" class="icon-center">
              <h3>local_printshop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_see.png" class="icon-center">
              <h3>local_see</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_shipping.png" class="icon-center">
              <h3>local_shipping</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="local_taxi.png" class="icon-center">
              <h3>local_taxi</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="location_city.png" class="icon-center">
              <h3>location_city</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="location_disabled.png" class="icon-center">
              <h3>location_disabled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="location_off.png" class="icon-center">
              <h3>location_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="location_on.png" class="icon-center">
              <h3>location_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="location_searching.png" class="icon-center">
              <h3>location_searching</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="lock_open.png" class="icon-center">
              <h3>lock_open</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="lock_outline.png" class="icon-center">
              <h3>lock_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="lock.png" class="icon-center">
              <h3>lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_3.png" class="icon-center">
              <h3>looks_3</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_4.png" class="icon-center">
              <h3>looks_4</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_5.png" class="icon-center">
              <h3>looks_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_6.png" class="icon-center">
              <h3>looks_6</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_one.png" class="icon-center">
              <h3>looks_one</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks_two.png" class="icon-center">
              <h3>looks_two</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="looks.png" class="icon-center">
              <h3>looks</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="loop.png" class="icon-center">
              <h3>loop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="loupe.png" class="icon-center">
              <h3>loupe</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="low_priority_32dp.png" class="icon-center">
              <h3>low_priority_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="low_priority.png" class="icon-center">
              <h3>low_priority</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="loyalty.png" class="icon-center">
              <h3>loyalty</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mail_outline.png" class="icon-center">
              <h3>mail_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mail.png" class="icon-center">
              <h3>mail</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="map.png" class="icon-center">
              <h3>map</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="markunread_mailbox.png" class="icon-center">
              <h3>markunread_mailbox</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="markunread.png" class="icon-center">
              <h3>markunread</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mblack.png" class="icon-center">
              <h3>mblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="memory.png" class="icon-center">
              <h3>memory</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="menu.png" class="icon-center">
              <h3>menu</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="merge_type.png" class="icon-center">
              <h3>merge_type</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="message.png" class="icon-center">
              <h3>message</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mms.png" class="icon-center">
              <h3>mms</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mnone.png" class="icon-center">
              <h3>mnone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mode_comment.png" class="icon-center">
              <h3>mode_comment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mode_edit.png" class="icon-center">
              <h3>mode_edit</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="moff.png" class="icon-center">
              <h3>moff</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="monetization_on.png" class="icon-center">
              <h3>monetization_on</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="money_off.png" class="icon-center">
              <h3>money_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="monochrome_photos.png" class="icon-center">
              <h3>monochrome_photos</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mood_bad.png" class="icon-center">
              <h3>mood_bad</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mood.png" class="icon-center">
              <h3>mood</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="more_horiz.png" class="icon-center">
              <h3>more_horiz</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="more_vert.png" class="icon-center">
              <h3>more_vert</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="more.png" class="icon-center">
              <h3>more</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="motorcycle.png" class="icon-center">
              <h3>motorcycle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="mouse.png" class="icon-center">
              <h3>mouse</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="move_to_inbox.png" class="icon-center">
              <h3>move_to_inbox</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="movie_creation.png" class="icon-center">
              <h3>movie_creation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="movie_filter.png" class="icon-center">
              <h3>movie_filter</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="movie.png" class="icon-center">
              <h3>movie</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="multiline_chart.png" class="icon-center">
              <h3>multiline_chart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="musnote.png" class="icon-center">
              <h3>musnote</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="musvideo.png" class="icon-center">
              <h3>musvideo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="my_location.png" class="icon-center">
              <h3>my_location</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="nature_people.png" class="icon-center">
              <h3>nature_people</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="nature.png" class="icon-center">
              <h3>nature</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="navigate_before.png" class="icon-center">
              <h3>navigate_before</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="navigate_next.png" class="icon-center">
              <h3>navigate_next</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="navigation.png" class="icon-center">
              <h3>navigation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="near_me.png" class="icon-center">
              <h3>near_me</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="network_cell.png" class="icon-center">
              <h3>network_cell</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="network_check.png" class="icon-center">
              <h3>network_check</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="network_locked.png" class="icon-center">
              <h3>network_locked</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="network_wifi.png" class="icon-center">
              <h3>network_wifi</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="new_releases.png" class="icon-center">
              <h3>new_releases</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="next_week.png" class="icon-center">
              <h3>next_week</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="nfc.png" class="icon-center">
              <h3>nfc</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="no_encryption.png" class="icon-center">
              <h3>no_encryption</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="no_sim.png" class="icon-center">
              <h3>no_sim</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="not_interested.png" class="icon-center">
              <h3>not_interested</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="note_add.png" class="icon-center">
              <h3>note_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="note.png" class="icon-center">
              <h3>note</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="notifications_active.png" class="icon-center">
              <h3>notifications_active</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="notifications_none.png" class="icon-center">
              <h3>notifications_none</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="notifications_off.png" class="icon-center">
              <h3>notifications_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="notifications_paused.png" class="icon-center">
              <h3>notifications_paused</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="notifications.png" class="icon-center">
              <h3>notifications</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="offline_pin.png" class="icon-center">
              <h3>offline_pin</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="ondemand_video.png" class="icon-center">
              <h3>ondemand_video</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="opacity.png" class="icon-center">
              <h3>opacity</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="open_in_browser.png" class="icon-center">
              <h3>open_in_browser</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="open_in_new_12dp.png" class="icon-center">
              <h3>open_in_new_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="open_in_new.png" class="icon-center">
              <h3>open_in_new</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="open_with.png" class="icon-center">
              <h3>open_with</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pages.png" class="icon-center">
              <h3>pages</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pageview.png" class="icon-center">
              <h3>pageview</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="palette.png" class="icon-center">
              <h3>palette</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pan_tool.png" class="icon-center">
              <h3>pan_tool</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="panorama_fish_eye.png" class="icon-center">
              <h3>panorama_fish_eye</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="panorama_horizontal.png" class="icon-center">
              <h3>panorama_horizontal</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="panorama_vertical.png" class="icon-center">
              <h3>panorama_vertical</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="panorama_wide_angle.png" class="icon-center">
              <h3>panorama_wide_angle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="panorama.png" class="icon-center">
              <h3>panorama</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="party_mode.png" class="icon-center">
              <h3>party_mode</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pause_circle_filled.png" class="icon-center">
              <h3>pause_circle_filled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pause_circle_outline.png" class="icon-center">
              <h3>pause_circle_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pause.png" class="icon-center">
              <h3>pause</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="payment.png" class="icon-center">
              <h3>payment</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="people_outline.png" class="icon-center">
              <h3>people_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="people.png" class="icon-center">
              <h3>people</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_camera_mblack.png" class="icon-center">
              <h3>perm_camera_mblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_contact_calendar.png" class="icon-center">
              <h3>perm_contact_calendar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_data_setting.png" class="icon-center">
              <h3>perm_data_setting</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_device_information.png" class="icon-center">
              <h3>perm_device_information</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_identity.png" class="icon-center">
              <h3>perm_identity</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_media.png" class="icon-center">
              <h3>perm_media</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_phone_msg.png" class="icon-center">
              <h3>perm_phone_msg</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="perm_scan_wifi.png" class="icon-center">
              <h3>perm_scan_wifi</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_16dp.png" class="icon-center">
              <h3>person_add_16dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_32dp.png" class="icon-center">
              <h3>person_add_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_64dp.png" class="icon-center">
              <h3>person_add_64dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_128dp.png" class="icon-center">
              <h3>person_add_128dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_256dp.png" class="icon-center">
              <h3>person_add_256dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add_512dp.png" class="icon-center">
              <h3>person_add_512dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_add.png" class="icon-center">
              <h3>person_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_outline.png" class="icon-center">
              <h3>person_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_pin_circle.png" class="icon-center">
              <h3>person_pin_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person_pin.png" class="icon-center">
              <h3>person_pin</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="person.png" class="icon-center">
              <h3>person</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="personal_video.png" class="icon-center">
              <h3>personal_video</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pets.png" class="icon-center">
              <h3>pets</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_android.png" class="icon-center">
              <h3>phone_android</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_bluetooth_speaker.png" class="icon-center">
              <h3>phone_bluetooth_speaker</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_forwarded.png" class="icon-center">
              <h3>phone_forwarded</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_in_talk.png" class="icon-center">
              <h3>phone_in_talk</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_iphone.png" class="icon-center">
              <h3>phone_iphone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_locked.png" class="icon-center">
              <h3>phone_locked</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_missed.png" class="icon-center">
              <h3>phone_missed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone_paused.png" class="icon-center">
              <h3>phone_paused</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phone.png" class="icon-center">
              <h3>phone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink_erase.png" class="icon-center">
              <h3>phonelink_erase</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink_lock.png" class="icon-center">
              <h3>phonelink_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink_off.png" class="icon-center">
              <h3>phonelink_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink_ring.png" class="icon-center">
              <h3>phonelink_ring</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink_setup.png" class="icon-center">
              <h3>phonelink_setup</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="phonelink.png" class="icon-center">
              <h3>phonelink</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_album.png" class="icon-center">
              <h3>photo_album</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_camera.png" class="icon-center">
              <h3>photo_camera</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_filter.png" class="icon-center">
              <h3>photo_filter</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_library.png" class="icon-center">
              <h3>photo_library</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_size_select_actual.png" class="icon-center">
              <h3>photo_size_select_actual</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_size_select_large.png" class="icon-center">
              <h3>photo_size_select_large</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo_size_select_small.png" class="icon-center">
              <h3>photo_size_select_small</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="photo.png" class="icon-center">
              <h3>photo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="picture_as_pdf.png" class="icon-center">
              <h3>picture_as_pdf</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="picture_in_picture_alt.png" class="icon-center">
              <h3>picture_in_picture_alt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="picture_in_picture.png" class="icon-center">
              <h3>picture_in_picture</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pie_chart_outlined.png" class="icon-center">
              <h3>pie_chart_outlined</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pie_chart.png" class="icon-center">
              <h3>pie_chart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pin_drop.png" class="icon-center">
              <h3>pin_drop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="place.png" class="icon-center">
              <h3>place</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="play_arrow.png" class="icon-center">
              <h3>play_arrow</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="play_circle_filled.png" class="icon-center">
              <h3>play_circle_filled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="play_circle_outline.png" class="icon-center">
              <h3>play_circle_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="play_for_work.png" class="icon-center">
              <h3>play_for_work</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="playlist_add_check.png" class="icon-center">
              <h3>playlist_add_check</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="playlist_add.png" class="icon-center">
              <h3>playlist_add</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="playlist_play.png" class="icon-center">
              <h3>playlist_play</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="plus_one.png" class="icon-center">
              <h3>plus_one</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="poll.png" class="icon-center">
              <h3>poll</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="polymer.png" class="icon-center">
              <h3>polymer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pool.png" class="icon-center">
              <h3>pool</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="portable_wifi_off.png" class="icon-center">
              <h3>portable_wifi_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="portrait.png" class="icon-center">
              <h3>portrait</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="power_input.png" class="icon-center">
              <h3>power_input</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="power_settings_new.png" class="icon-center">
              <h3>power_settings_new</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="power.png" class="icon-center">
              <h3>power</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="pregnant_woman.png" class="icon-center">
              <h3>pregnant_woman</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="present_to_all.png" class="icon-center">
              <h3>present_to_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="print.png" class="icon-center">
              <h3>print</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="priority_high.png" class="icon-center">
              <h3>priority_high</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="publblack.png" class="icon-center">
              <h3>publblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="publish.png" class="icon-center">
              <h3>publish</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="query_builder.png" class="icon-center">
              <h3>query_builder</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="question_answer.png" class="icon-center">
              <h3>question_answer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="queue_musblack.png" class="icon-center">
              <h3>queue_musblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="queue_play_next.png" class="icon-center">
              <h3>queue_play_next</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="queue.png" class="icon-center">
              <h3>queue</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="radio.png" class="icon-center">
              <h3>radio</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rate_review.png" class="icon-center">
              <h3>rate_review</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="receipt.png" class="icon-center">
              <h3>receipt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="recent_actors.png" class="icon-center">
              <h3>recent_actors</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="record_voice_over.png" class="icon-center">
              <h3>record_voice_over</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="redeem.png" class="icon-center">
              <h3>redeem</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="redo.png" class="icon-center">
              <h3>redo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="refresh.png" class="icon-center">
              <h3>refresh</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove_circle_outline.png" class="icon-center">
              <h3>remove_circle_outline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove_circle.png" class="icon-center">
              <h3>remove_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove_from_queue.png" class="icon-center">
              <h3>remove_from_queue</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove_red_eye.png" class="icon-center">
              <h3>remove_red_eye</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove_shopping_cart.png" class="icon-center">
              <h3>remove_shopping_cart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="remove.png" class="icon-center">
              <h3>remove</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="reorder.png" class="icon-center">
              <h3>reorder</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="repeat_one.png" class="icon-center">
              <h3>repeat_one</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="repeat.png" class="icon-center">
              <h3>repeat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="replay_5.png" class="icon-center">
              <h3>replay_5</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="replay_10.png" class="icon-center">
              <h3>replay_10</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="replay_30.png" class="icon-center">
              <h3>replay_30</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="replay.png" class="icon-center">
              <h3>replay</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="reply_all.png" class="icon-center">
              <h3>reply_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="reply.png" class="icon-center">
              <h3>reply</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="report_problem.png" class="icon-center">
              <h3>report_problem</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="report.png" class="icon-center">
              <h3>report</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="restaurant_menu.png" class="icon-center">
              <h3>restaurant_menu</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="restaurant.png" class="icon-center">
              <h3>restaurant</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="restore_page.png" class="icon-center">
              <h3>restore_page</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="restore.png" class="icon-center">
              <h3>restore</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="ring_volume.png" class="icon-center">
              <h3>ring_volume</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="room_service.png" class="icon-center">
              <h3>room_service</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="room.png" class="icon-center">
              <h3>room</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rotate_90_degrees_ccw.png" class="icon-center">
              <h3>rotate_90_degrees_ccw</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rotate_left.png" class="icon-center">
              <h3>rotate_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rotate_right.png" class="icon-center">
              <h3>rotate_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rounded_corner.png" class="icon-center">
              <h3>rounded_corner</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="router.png" class="icon-center">
              <h3>router</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rowing.png" class="icon-center">
              <h3>rowing</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rss_feed.png" class="icon-center">
              <h3>rss_feed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rv_hookup 2.png" class="icon-center">
              <h3>rv_hookup 2</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="rv_hookup.png" class="icon-center">
              <h3>rv_hookup</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="satellite.png" class="icon-center">
              <h3>satellite</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="save.png" class="icon-center">
              <h3>save</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="scanner.png" class="icon-center">
              <h3>scanner</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="schedule.png" class="icon-center">
              <h3>schedule</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="school.png" class="icon-center">
              <h3>school</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="screen_lock_landscape.png" class="icon-center">
              <h3>screen_lock_landscape</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="screen_lock_portrait.png" class="icon-center">
              <h3>screen_lock_portrait</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="screen_lock_rotation.png" class="icon-center">
              <h3>screen_lock_rotation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="screen_rotation.png" class="icon-center">
              <h3>screen_rotation</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="screen_share.png" class="icon-center">
              <h3>screen_share</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sd_card.png" class="icon-center">
              <h3>sd_card</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sd_storage.png" class="icon-center">
              <h3>sd_storage</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="search.png" class="icon-center">
              <h3>search</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="security.png" class="icon-center">
              <h3>security</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="select_all.png" class="icon-center">
              <h3>select_all</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="send.png" class="icon-center">
              <h3>send</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sentiment_dissatisfied.png" class="icon-center">
              <h3>sentiment_dissatisfied</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sentiment_neutral.png" class="icon-center">
              <h3>sentiment_neutral</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sentiment_satisfied.png" class="icon-center">
              <h3>sentiment_satisfied</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sentiment_very_dissatisfied.png" class="icon-center">
              <h3>sentiment_very_dissatisfied</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sentiment_very_satisfied.png" class="icon-center">
              <h3>sentiment_very_satisfied</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_applications.png" class="icon-center">
              <h3>settings_applications</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_backup_restore.png" class="icon-center">
              <h3>settings_backup_restore</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_bluetooth.png" class="icon-center">
              <h3>settings_bluetooth</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_brightness.png" class="icon-center">
              <h3>settings_brightness</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_cell.png" class="icon-center">
              <h3>settings_cell</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_ethernet.png" class="icon-center">
              <h3>settings_ethernet</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_input_antenna.png" class="icon-center">
              <h3>settings_input_antenna</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_input_component.png" class="icon-center">
              <h3>settings_input_component</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_input_composite.png" class="icon-center">
              <h3>settings_input_composite</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_input_hdmi.png" class="icon-center">
              <h3>settings_input_hdmi</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_input_svideo.png" class="icon-center">
              <h3>settings_input_svideo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_overscan.png" class="icon-center">
              <h3>settings_overscan</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_phone.png" class="icon-center">
              <h3>settings_phone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_power.png" class="icon-center">
              <h3>settings_power</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_remote.png" class="icon-center">
              <h3>settings_remote</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_system_daydream.png" class="icon-center">
              <h3>settings_system_daydream</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings_voice.png" class="icon-center">
              <h3>settings_voice</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="settings.png" class="icon-center">
              <h3>settings</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="share.png" class="icon-center">
              <h3>share</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shop_two.png" class="icon-center">
              <h3>shop_two</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shop.png" class="icon-center">
              <h3>shop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shopping_basket.png" class="icon-center">
              <h3>shopping_basket</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shopping_cart_12dp.png" class="icon-center">
              <h3>shopping_cart_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shopping_cart_32dp.png" class="icon-center">
              <h3>shopping_cart_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shopping_cart.png" class="icon-center">
              <h3>shopping_cart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="short_text.png" class="icon-center">
              <h3>short_text</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="show_chart.png" class="icon-center">
              <h3>show_chart</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="shuffle.png" class="icon-center">
              <h3>shuffle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_0_bar.png" class="icon-center">
              <h3>signal_cellular_0_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_1_bar.png" class="icon-center">
              <h3>signal_cellular_1_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_2_bar.png" class="icon-center">
              <h3>signal_cellular_2_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_3_bar.png" class="icon-center">
              <h3>signal_cellular_3_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_4_bar.png" class="icon-center">
              <h3>signal_cellular_4_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_connected_no_internet_0_bar.png" class="icon-center">
              <h3>signal_cellular_connected_no_internet_0_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_connected_no_internet_1_bar.png" class="icon-center">
              <h3>signal_cellular_connected_no_internet_1_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_connected_no_internet_2_bar.png" class="icon-center">
              <h3>signal_cellular_connected_no_internet_2_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_connected_no_internet_3_bar.png" class="icon-center">
              <h3>signal_cellular_connected_no_internet_3_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_connected_no_internet_4_bar.png" class="icon-center">
              <h3>signal_cellular_connected_no_internet_4_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_no_sim.png" class="icon-center">
              <h3>signal_cellular_no_sim</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_null.png" class="icon-center">
              <h3>signal_cellular_null</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_cellular_off.png" class="icon-center">
              <h3>signal_cellular_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_0_bar.png" class="icon-center">
              <h3>signal_wifi_0_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_1_bar_lock.png" class="icon-center">
              <h3>signal_wifi_1_bar_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_1_bar.png" class="icon-center">
              <h3>signal_wifi_1_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_2_bar_lock.png" class="icon-center">
              <h3>signal_wifi_2_bar_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_2_bar.png" class="icon-center">
              <h3>signal_wifi_2_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_3_bar_lock.png" class="icon-center">
              <h3>signal_wifi_3_bar_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_3_bar.png" class="icon-center">
              <h3>signal_wifi_3_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_4_bar_lock.png" class="icon-center">
              <h3>signal_wifi_4_bar_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_4_bar.png" class="icon-center">
              <h3>signal_wifi_4_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="signal_wifi_off.png" class="icon-center">
              <h3>signal_wifi_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sim_card_alert.png" class="icon-center">
              <h3>sim_card_alert</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sim_card.png" class="icon-center">
              <h3>sim_card</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="skip_next.png" class="icon-center">
              <h3>skip_next</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="skip_previous.png" class="icon-center">
              <h3>skip_previous</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="slideshow.png" class="icon-center">
              <h3>slideshow</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="slow_motion_video.png" class="icon-center">
              <h3>slow_motion_video</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="smartphone.png" class="icon-center">
              <h3>smartphone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="smoke_free.png" class="icon-center">
              <h3>smoke_free</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="smoking_rooms.png" class="icon-center">
              <h3>smoking_rooms</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sms_failed.png" class="icon-center">
              <h3>sms_failed</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sms.png" class="icon-center">
              <h3>sms</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="snooze.png" class="icon-center">
              <h3>snooze</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sort_by_alpha.png" class="icon-center">
              <h3>sort_by_alpha</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sort.png" class="icon-center">
              <h3>sort</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="spa.png" class="icon-center">
              <h3>spa</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="space_bar.png" class="icon-center">
              <h3>space_bar</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="speaker_group.png" class="icon-center">
              <h3>speaker_group</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="speaker_notes_off.png" class="icon-center">
              <h3>speaker_notes_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="speaker_notes.png" class="icon-center">
              <h3>speaker_notes</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="speaker_phone.png" class="icon-center">
              <h3>speaker_phone</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="speaker.png" class="icon-center">
              <h3>speaker</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="spellcheck.png" class="icon-center">
              <h3>spellcheck</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="star_border.png" class="icon-center">
              <h3>star_border</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="star_half.png" class="icon-center">
              <h3>star_half</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="star.png" class="icon-center">
              <h3>star</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stars.png" class="icon-center">
              <h3>stars</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stay_current_landscape.png" class="icon-center">
              <h3>stay_current_landscape</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stay_current_portrait.png" class="icon-center">
              <h3>stay_current_portrait</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stay_primary_landscape.png" class="icon-center">
              <h3>stay_primary_landscape</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stay_primary_portrait.png" class="icon-center">
              <h3>stay_primary_portrait</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stop_screen_share.png" class="icon-center">
              <h3>stop_screen_share</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="stop.png" class="icon-center">
              <h3>stop</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="storage.png" class="icon-center">
              <h3>storage</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="store_mall_directory.png" class="icon-center">
              <h3>store_mall_directory</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="store.png" class="icon-center">
              <h3>store</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="straighten.png" class="icon-center">
              <h3>straighten</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="streetview.png" class="icon-center">
              <h3>streetview</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="strikethrough_s.png" class="icon-center">
              <h3>strikethrough_s</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="style.png" class="icon-center">
              <h3>style</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subdirectory_arrow_left.png" class="icon-center">
              <h3>subdirectory_arrow_left</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subdirectory_arrow_right.png" class="icon-center">
              <h3>subdirectory_arrow_right</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subject.png" class="icon-center">
              <h3>subject</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subscriptions.png" class="icon-center">
              <h3>subscriptions</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subtitles.png" class="icon-center">
              <h3>subtitles</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="subway.png" class="icon-center">
              <h3>subway</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="supervisor_account.png" class="icon-center">
              <h3>supervisor_account</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="surround_sound.png" class="icon-center">
              <h3>surround_sound</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="swap_calls.png" class="icon-center">
              <h3>swap_calls</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="swap_horiz.png" class="icon-center">
              <h3>swap_horiz</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="swap_vert.png" class="icon-center">
              <h3>swap_vert</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="swap_vertical_circle.png" class="icon-center">
              <h3>swap_vertical_circle</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="switch_camera.png" class="icon-center">
              <h3>switch_camera</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="switch_video.png" class="icon-center">
              <h3>switch_video</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_16dp.png" class="icon-center">
              <h3>sync_16dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_32dp.png" class="icon-center">
              <h3>sync_32dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_64dp.png" class="icon-center">
              <h3>sync_64dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_128dp.png" class="icon-center">
              <h3>sync_128dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_256dp.png" class="icon-center">
              <h3>sync_256dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_512dp.png" class="icon-center">
              <h3>sync_512dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_disabled.png" class="icon-center">
              <h3>sync_disabled</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync_problem.png" class="icon-center">
              <h3>sync_problem</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="sync.png" class="icon-center">
              <h3>sync</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="system_update_alt.png" class="icon-center">
              <h3>system_update_alt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="system_update.png" class="icon-center">
              <h3>system_update</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tab_unselected.png" class="icon-center">
              <h3>tab_unselected</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tab.png" class="icon-center">
              <h3>tab</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tablet_android.png" class="icon-center">
              <h3>tablet_android</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tablet_mac.png" class="icon-center">
              <h3>tablet_mac</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tablet.png" class="icon-center">
              <h3>tablet</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tag_faces.png" class="icon-center">
              <h3>tag_faces</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tap_and_play.png" class="icon-center">
              <h3>tap_and_play</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="terrain.png" class="icon-center">
              <h3>terrain</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="text_fields.png" class="icon-center">
              <h3>text_fields</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="text_format.png" class="icon-center">
              <h3>text_format</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="textsms.png" class="icon-center">
              <h3>textsms</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="texture.png" class="icon-center">
              <h3>texture</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="theaters.png" class="icon-center">
              <h3>theaters</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="thumb_down.png" class="icon-center">
              <h3>thumb_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="thumb_up.png" class="icon-center">
              <h3>thumb_up</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="thumbs_up_down.png" class="icon-center">
              <h3>thumbs_up_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="time_to_leave.png" class="icon-center">
              <h3>time_to_leave</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timelapse.png" class="icon-center">
              <h3>timelapse</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timeline.png" class="icon-center">
              <h3>timeline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timer_3.png" class="icon-center">
              <h3>timer_3</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timer_10.png" class="icon-center">
              <h3>timer_10</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timer_off.png" class="icon-center">
              <h3>timer_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="timer.png" class="icon-center">
              <h3>timer</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="title.png" class="icon-center">
              <h3>title</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="toc.png" class="icon-center">
              <h3>toc</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="today.png" class="icon-center">
              <h3>today</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="toll.png" class="icon-center">
              <h3>toll</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tonality.png" class="icon-center">
              <h3>tonality</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="touch_app.png" class="icon-center">
              <h3>touch_app</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="toys.png" class="icon-center">
              <h3>toys</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="track_changes.png" class="icon-center">
              <h3>track_changes</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="traffblack.png" class="icon-center">
              <h3>traffblack</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="train.png" class="icon-center">
              <h3>train</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tram.png" class="icon-center">
              <h3>tram</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="transfer_within_a_station.png" class="icon-center">
              <h3>transfer_within_a_station</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="transform.png" class="icon-center">
              <h3>transform</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="translate.png" class="icon-center">
              <h3>translate</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="trending_down.png" class="icon-center">
              <h3>trending_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="trending_flat.png" class="icon-center">
              <h3>trending_flat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="trending_up.png" class="icon-center">
              <h3>trending_up</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tune.png" class="icon-center">
              <h3>tune</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="turned_in_not.png" class="icon-center">
              <h3>turned_in_not</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="turned_in.png" class="icon-center">
              <h3>turned_in</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="tv.png" class="icon-center">
              <h3>tv</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="unarchive.png" class="icon-center">
              <h3>unarchive</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="undo.png" class="icon-center">
              <h3>undo</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="unfold_less.png" class="icon-center">
              <h3>unfold_less</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="unfold_more.png" class="icon-center">
              <h3>unfold_more</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="update.png" class="icon-center">
              <h3>update</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="usb.png" class="icon-center">
              <h3>usb</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="verified_user.png" class="icon-center">
              <h3>verified_user</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vertical_align_bottom.png" class="icon-center">
              <h3>vertical_align_bottom</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vertical_align_center.png" class="icon-center">
              <h3>vertical_align_center</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vertical_align_top.png" class="icon-center">
              <h3>vertical_align_top</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vibration.png" class="icon-center">
              <h3>vibration</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="video_call.png" class="icon-center">
              <h3>video_call</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="video_label.png" class="icon-center">
              <h3>video_label</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="video_library.png" class="icon-center">
              <h3>video_library</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="videocam_off.png" class="icon-center">
              <h3>videocam_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="videocam.png" class="icon-center">
              <h3>videocam</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="videogame_asset.png" class="icon-center">
              <h3>videogame_asset</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_agenda.png" class="icon-center">
              <h3>view_agenda</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_array.png" class="icon-center">
              <h3>view_array</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_carousel.png" class="icon-center">
              <h3>view_carousel</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_column.png" class="icon-center">
              <h3>view_column</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_comfy.png" class="icon-center">
              <h3>view_comfy</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_compact.png" class="icon-center">
              <h3>view_compact</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_day.png" class="icon-center">
              <h3>view_day</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_headline.png" class="icon-center">
              <h3>view_headline</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_list.png" class="icon-center">
              <h3>view_list</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_module.png" class="icon-center">
              <h3>view_module</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_quilt.png" class="icon-center">
              <h3>view_quilt</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_stream.png" class="icon-center">
              <h3>view_stream</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="view_week.png" class="icon-center">
              <h3>view_week</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vignette.png" class="icon-center">
              <h3>vignette</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="visibility_off.png" class="icon-center">
              <h3>visibility_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="visibility.png" class="icon-center">
              <h3>visibility</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="voice_chat.png" class="icon-center">
              <h3>voice_chat</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="voicemail.png" class="icon-center">
              <h3>voicemail</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="volume_down.png" class="icon-center">
              <h3>volume_down</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="volume_mute.png" class="icon-center">
              <h3>volume_mute</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="volume_off.png" class="icon-center">
              <h3>volume_off</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="volume_up.png" class="icon-center">
              <h3>volume_up</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vpn_key.png" class="icon-center">
              <h3>vpn_key</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="vpn_lock.png" class="icon-center">
              <h3>vpn_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wallpaper.png" class="icon-center">
              <h3>wallpaper</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="warning.png" class="icon-center">
              <h3>warning</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="watch_later.png" class="icon-center">
              <h3>watch_later</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="watch.png" class="icon-center">
              <h3>watch</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wb_auto.png" class="icon-center">
              <h3>wb_auto</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wb_cloudy.png" class="icon-center">
              <h3>wb_cloudy</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wb_incandescent.png" class="icon-center">
              <h3>wb_incandescent</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wb_iridescent.png" class="icon-center">
              <h3>wb_iridescent</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wb_sunny.png" class="icon-center">
              <h3>wb_sunny</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wc.png" class="icon-center">
              <h3>wc</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="web_asset.png" class="icon-center">
              <h3>web_asset</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="web.png" class="icon-center">
              <h3>web</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="weekend.png" class="icon-center">
              <h3>weekend</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="whatshot_12dp.png" class="icon-center">
              <h3>whatshot_12dp</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="whatshot.png" class="icon-center">
              <h3>whatshot</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="widgets.png" class="icon-center">
              <h3>widgets</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wifi_lock.png" class="icon-center">
              <h3>wifi_lock</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wifi_tethering.png" class="icon-center">
              <h3>wifi_tethering</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wifi.png" class="icon-center">
              <h3>wifi</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="work.png" class="icon-center">
              <h3>work</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="wrap_text.png" class="icon-center">
              <h3>wrap_text</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="youtube_searched_for.png" class="icon-center">
              <h3>youtube_searched_for</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="zoom_in.png" class="icon-center">
              <h3>zoom_in</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="zoom_out_map.png" class="icon-center">
              <h3>zoom_out_map</h3>
            </div>
            <div class="mainContentSelected main-content"><img src="zoom_out.png" class="icon-center">
              <h3>zoom_out</h3>
            </div>




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
</dialog>
`;

  function createSh(selection) {
    console.log("clicked!!!");
    selection.className += " active";
    //createPieChartHandlerFunction(selection);
  }

  dialog = document.querySelector(sel);

  const [form, cancel, ok] = [`${sel} form`, "#cancel", "#ok"].map(s => $(s));

  const submit = () => {
    dialog.close();
  }

  cancel.addEventListener("click", () => {
    dialog.close();
  });

  var current_image_src = undefined;

  async function loadImages() {
    const storage = require("uxp").storage;
    const fs = storage.localFileSystem;
    //let imageFile = await fs.getFileForOpening({ types: storage.fileTypes.images });
    const pluginFolder = await fs.getPluginFolder();
    const entries = await pluginFolder.getEntries();
    let our_image = null;
    entries.forEach(entry => {
      //console.log(entry.name);
      if (entry.name == current_image_src)
        our_image = entry;
    });

    const newElement = new Rectangle(); // [3]
    newElement.width = 48;
    newElement.height = 48;

    const ImageFill = require("scenegraph").ImageFill;
    let fill = new ImageFill(our_image);

    //Set fill of first selected item
    newElement.fill = fill;

    selection.insertionParent.addChild(newElement); // [4]
    newElement.moveInParentCoordinates(100, 100);

  }

  ok.addEventListener("click", (e) => {
    loadImages();
    //submit();
    e.preventDefault();
  });

  form.onsubmit = submit;

  // document.getElementById("hello").addEventListener("click", function(){
  // 	createSh(this)
  // });

  var image_grid = document.getElementById("image_grid");

  var selected = null;
  var mainContentAll = image_grid.getElementsByClassName("mainContentSelected");
  for (var i = 0; i < mainContentAll.length; i++) {
    mainContentAll[i].addEventListener("click", function() {
      selected = this;
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      current_image_src = this.querySelector("img").src;
    });

  }

  return dialog;
}

async function menuCommand(selection) {

  const dialog = createDialog(selection);
  return dialog.showModal();
}

module.exports = {
  commands: {
    menuCommand
  }
};