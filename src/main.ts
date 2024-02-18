/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

     // Julia custom
    WA.room.onEnterLayer("roof-appear-zone").subscribe(() => {
      WA.room.showLayer("roof-appear");
      console.log("HHHHHIIIIIIIII")
    });
    

     WA.room.onEnterLayer("floor").subscribe(() => {
      WA.room.hideLayer("roof");
      WA.room.hideLayer("roof-appear");
      WA.room.hideLayer("walls-bg-front");
      WA.room.hideLayer("sign");
    });
    
  WA.room.onLeaveLayer("floor").subscribe(() => {
      WA.room.showLayer("roof");
      WA.room.showLayer("walls-bg-front");
      WA.room.showLayer("facade-furniture-bg");
      WA.room.showLayer("sign");
    });

    WA.room.onEnterLayer("rooms_floor").subscribe(() => {
      WA.room.hideLayer("facade-furniture-fg");
      WA.room.hideLayer("facade");
      WA.room.hideLayer("facade-furniture-bg");
    });
    
  WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
      WA.room.showLayer("facade-furniture-fg");
      WA.room.showLayer("facade");
      WA.room.showLayer("facade-furniture-bg");
    });


    // snow zone
    WA.room.onEnterLayer("snow_zone").subscribe(() => {
      WA.room.showLayer("snow-on");
    });
    
  WA.room.onLeaveLayer("snow_zone").subscribe(() => {
      WA.room.hideLayer("snow-on");
    });
    
  //Popup Agriculture
  WA.room.onEnterLayer('message-1').subscribe(() => {
    currentPopup = WA.ui.openPopup("Addon1Pop","Agriculture",[]);
  })
  WA.room.onLeaveLayer('message-1').subscribe(closePopup)

  //Popup Agriculture X
  WA.room.onEnterLayer('message1').subscribe(() => {
    currentPopup = WA.ui.openPopup("Addon1xPop","Agriculture",[]);
  })
  WA.room.onLeaveLayer('message1').subscribe(closePopup)

  //Popup Engineering
WA.room.onEnterLayer('message-2').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon2Pop","Engineering",[]);
})
WA.room.onLeaveLayer('message-2').subscribe(closePopup)
//Popup Engineering x
WA.room.onEnterLayer('message2').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon2xPop","Engineering",[]);
})
WA.room.onLeaveLayer('message2').subscribe(closePopup)

//Popup Human Services
WA.room.onEnterLayer('message-3').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon3Pop","Human Services",[]);
})
WA.room.onLeaveLayer('message-3').subscribe(closePopup)
//Popup Human Services x
WA.room.onEnterLayer('message3').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon3xPop","Human Services",[]);
})
WA.room.onLeaveLayer('message3').subscribe(closePopup)

//Popup Business
WA.room.onEnterLayer('message-4').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon4Pop","Business",[]);
})
WA.room.onLeaveLayer('message-4').subscribe(closePopup)
//Popup Business x
WA.room.onEnterLayer('message4').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon4xPop","Business",[]);
})
WA.room.onLeaveLayer('message4').subscribe(closePopup)
//Popup Health Sciences
WA.room.onEnterLayer('message-5').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon5Pop","Health Sciences",[]);
})
WA.room.onLeaveLayer('message-5').subscribe(closePopup)
//Popup Health Sciences x
WA.room.onEnterLayer('message5').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon5xPop","Health Sciences",[]);
})
WA.room.onLeaveLayer('message5').subscribe(closePopup)
//Popup Information Systems
WA.room.onEnterLayer('message-6').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon6Pop","Information Systems",[]);
})
WA.room.onLeaveLayer('message-6').subscribe(closePopup)
//Popup Information Systems x
WA.room.onEnterLayer('message6').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon6xPop","Information Systems",[]);
})
WA.room.onLeaveLayer('message6').subscribe(closePopup)

//Popup Cobra Connections Rooms 11-20
WA.room.onEnterLayer('message-7').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon7Pop","Cobra Connections Rooms 11-20",[]);
})
WA.room.onLeaveLayer('message-7').subscribe(closePopup)
//Popup Cobra Connections Rooms 1-10
WA.room.onEnterLayer('message-8').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon8Pop","Cobra Connections Rooms 1-10",[]);
})
WA.room.onLeaveLayer('message-8').subscribe(closePopup)

//Popup Project Labs
WA.room.onEnterLayer('message-9').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon9Pop","Project Labs",[]);
})
WA.room.onLeaveLayer('message-9').subscribe(closePopup)
//Popup Project Labs x
WA.room.onEnterLayer('message9').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon9xPop","Project Labs",[]);
})
WA.room.onLeaveLayer('message9').subscribe(closePopup)
//Popup Fitness Center
WA.room.onEnterLayer('message-10').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon10xPop","Fitness Center",[]);
})
WA.room.onLeaveLayer('message-10').subscribe(closePopup)
//Popup Fitness Center x
WA.room.onEnterLayer('message10').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon10Pop","Fitness Center",[]);
})
WA.room.onLeaveLayer('message10').subscribe(closePopup)

//Popup Amphitheater
WA.room.onEnterLayer('message-11').subscribe(() => {
  currentPopup = WA.ui.openPopup("Addon11Pop","Amphitheater",[]);
})
WA.room.onLeaveLayer('message-11').subscribe(closePopup)

//Popup Memorial tree
WA.room.onEnterLayer('memorial_tree_sign').subscribe(() => {
  currentPopup = WA.ui.openPopup("memorial-tree-popup","Honoring Gary Morris",[]);
})
WA.room.onLeaveLayer('memorial_tree_sign').subscribe(closePopup)
    
    WA.room.onLeaveLayer('clockZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
