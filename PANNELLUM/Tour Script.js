const locations = {
  "Entrance Gate": "scene1",
  Facade: "scene2",
  "Left Facade": "scene3",
  "Right Facade": "scene4",
  "Scene 5": "scene5",
  //dito sa part nato ilalagay mo yung mga scene na nagawa mo, yung name ng scene tapos yung mismong scene
};

// Function to create a custom ground hotspot (Google Street View style)
function groundHotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("ground-hotspot"); // Apply CSS class
  hotSpotDiv.style.backgroundImage = "url('images/ARROW UP icon.png')"; // Use an arrow icon
  hotSpotDiv.style.width = "10px"; // Adjust width
  hotSpotDiv.style.height = "10px"; // Adjust height
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Pannellum Viewer with Two Scenes
  const viewer = pannellum.viewer("panorama", {
    default: {
      firstScene: "scene1",
      sceneFadeDuration: 1000,
      hfov: 100, // Default zoom level
      autoLoad: true, // ✅ Auto-load panorama on page load
      showFullscreenCtrl: false, // ✅ Hide fullscreen button
      showZoomCtrl: false, // ❌ This hides the zoom controls
    },
    scenes: {
      scene1: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME1.1.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -35, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "scene2",
          },
        ],
      },
      scene2: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME2.jpg",
        hfov: 200,
        pitch: -5,
        yaw: 3,
        hotSpots: [
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene1",
          },
          {
            pitch: -30,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene2.1",
          },
          {
            pitch: -30,
            yaw: -70, // Left side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Left to Facade Left",
            sceneId: "scene3",
          },
          {
            pitch: -30,
            yaw: 96, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene4",
          },
        ],
      },
      "scene2.1": {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME2.1.jpg",
        hfov: 200,
        pitch: -5,
        yaw: -5,
        hotSpots: [
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: -85, // Left side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Left to Facade Left",
            sceneId: "scene3",
          },
          {
            pitch: -30,
            yaw: 85, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene4.1BackFacade",
          },
        ],
      },
      scene3: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME3.jpg",
        hfov: 200,
        yaw: 190, // kung gusto mong iposition kung san yung center ng panorama
        hotSpots: [
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "PMH1",
          },
          {
            pitch: -150,
            yaw: 100, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene112", // hall kila sir ali wala pang naka scene
          },
          {
            pitch: -150,
            yaw: 180, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene2", // hall kila sir ali wala pang naka scene
          },
        ],
      },
      scene4: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.jpg",
        hfov: 200,
        yaw: 100, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "leftoffice1",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4.1",
          },
        ],
      },
      scene4Back: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.jpg",
        hfov: 200,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "leftoffice1",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4.1",
          },
        ],
      },
      "scene4.1": {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.1.jpg",
        hfov: 200,
        pitch: 20,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2.1",
          },
          {
            pitch: -10,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene5",
          },
          {
            pitch: -40,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4",
          },
        ],
      },
      "scene4.1BackFacade": {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.1.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 80, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2.1",
          },
          {
            pitch: -10,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene5",
          },
          {
            pitch: -40,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4",
          },
        ],
      },
      leftoffice1: {
        type: "equirectangular",
        panorama: "left-office/1.jpg",
        hfov: 200,
        yaw: 5,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice2",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene4Back",
          },
        ],
      },
      leftoffice1Back: {//back scene
        type: "equirectangular",
        panorama: "left-office/1.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice2",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene4Back",
          },
        ],
      },
      
      leftoffice2: {
        type: "equirectangular",
        panorama: "left-office/2.jpg",
        hfov: 200,
        yaw: 10,
        hotSpots: [
          {
            pitch: -30,
            yaw: 10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice3",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice1Back",
          }
        
        ],
      },
      leftoffice2Back: {
        type: "equirectangular",
        panorama: "left-office/2.jpg",
        hfov: 200,
        yaw: 190,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice3",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice1Back",
          }
        
        ],
      },
      leftoffice3: {
        type: "equirectangular",
        panorama: "left-office/3.jpg",
        hfov: 200,
        yaw: -2,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice4",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice2Back",
          }
        
        ],
      },
      leftoffice3Back: {
        type: "equirectangular",
        panorama: "left-office/3.jpg",
        hfov: 200,
        yaw: -180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice4",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice2Back",
          }
        
        ],
      },
      leftoffice4: {
        type: "equirectangular",
        panorama: "left-office/4.jpg",
        hfov: 200,
        yaw: 0,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice5",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice3Back",
          }
        
        ],
      },
      leftoffice4Back: {
        type: "equirectangular",
        panorama: "left-office/4.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice5",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice3Back",
          }
        
        ],
      },
      leftoffice5: {
        type: "equirectangular",
        panorama: "left-office/5.jpg",
        hfov: 200,
        yaw: 0,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice6",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice4Back",
          }
        
        ],
      },
      leftoffice5Back: {
        type: "equirectangular",
        panorama: "left-office/5.jpg",
        hfov: 200,
        yaw: 200,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice6",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice4Back",
          }
        
        ],
      },
      leftoffice6: {
        type: "equirectangular",
        panorama: "left-office/6.jpg",
        hfov: 200,
        yaw: -10,
        hotSpots: [
          {
            pitch: -30,
            yaw: -50,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice7",
          },
          {
            pitch: -30,
            yaw: 200,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice5Back",
          }
        
        ],
      },
      leftoffice6Back: {
        type: "equirectangular",
        panorama: "left-office/6.jpg",
        hfov: 200,
        yaw: 140,
        hotSpots: [
          {
            pitch: -30,
            yaw: -50,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice7",
          },
          {
            pitch: -30,
            yaw: 200,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice5Back",
          }
        
        ],
      },
      
      leftoffice7: {
        type: "equirectangular",
        panorama: "left-office/7.jpg",
        hfov: 200,
        yaw: 150,
        hotSpots: [
          {
            pitch: -30,
            yaw: 85,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "TA3Back",
          },
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice6Back",
          }
        
        ],
      },
      leftoffice7Back: {
        type: "equirectangular",
        panorama: "left-office/7.jpg",
        hfov: 200,
        yaw: -125,
        hotSpots: [
          {
            pitch: -30,
            yaw: 85,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "TA3Back",
          },
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice6Back",
          }
        
        ],
      },
      TA3Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 180, 
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice7Back",
          },
          {
            pitch: 2,
            yaw: 77,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob2Back",
          },
        ],
      },
      scene5: {
        type: "equirectangular",
        panorama: "3 main entrance/3.jpg",
        hfov: 200,
        yaw: 85, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene4.1",
          },
          {
            pitch: -35,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go to Registrar",
            sceneId: "reg1",
          },
          
        ],
      },
      
      scene6: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 100,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4",
          },
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene7",
          },
        ],
      },
      
      scene7: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7_1",
          },
        ],
      },
      
      scene7_1: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -20,
            yaw: -90,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene8",
          },
        ],
      },
      
      scene8: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -1,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene9",
          },
        ],
      },

      scene9: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.2.jpg",
        hfov: 200,
        yaw: -30, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -30,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "quad1",
          },
        ],
      },
      scene9Back: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.2.jpg",
        hfov: 200,
        pitch: -3,
        yaw: 150,
        hotSpots: [
          {
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "",
          },
        ],
      },
      quad1: {
        type: "equirectangular",
        panorama: "quadrangle/QD1.jpg",
        hfov: 200,
        pitch: 5,
        yaw: 3,
        hotSpots: [
          {
            pitch: -20,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad2",
          },
        ],
      },
      quad1Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD1.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 190,
        hotSpots: [
          {
            pitch: -20,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene9Back",
          },
        ],
      },
      quad2: {
        type: "equirectangular",
        panorama: "quadrangle/QD2.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -2,
        hotSpots: [
          {
            pitch: -20,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad4",
          },
        ],
      },
      quad2Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD2.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad1Back",
          },
        ],
      },

      quad4: {
        type: "equirectangular",
        panorama: "quadrangle/QD4.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad5",
          },
        ],
      },
      quad4Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD4.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad2Back",
          },
        ],
      },
      quad5: {
        type: "equirectangular",
        panorama: "quadrangle/QD5.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6",
          },
        ],
      },
      quad5Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD5.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad4Back",
          },
        ],
      },
      quad6: {
        type: "equirectangular",
        panorama: "quadrangle/QD6.jpg",
        hfov: 200,
        pitch: 7,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6Back",
          },
          {
            pitch: -10,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "quad7",
          }
        ],
      },
      quad6Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD6.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 172,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad5Back",
          },
        ],
      },
      quad7: {
        type: "equirectangular",
        panorama: "quadrangle/QD7.jpg",
        hfov: 200,
        pitch: 15,
        yaw: 90,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "GSTOCR",
          },
          {
            pitch: -20,
            yaw: -87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6Back",
          },
        ],
      },
      
      //GEN SIMEON BLDG.
      GSTOCR: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1TOCR.jpg",
  hfov: 300,
  pitch: -10,
  yaw: -5,
  hotSpots: [
    {
      pitch: 1,
      yaw: -5,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go 2ND Floor",
      sceneId: "GS8",
    },
    {
      pitch: -30,
      yaw: 45,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSCR",
    },
    {
      pitch: -30,
      yaw: 85,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
    {
      pitch: -10,
      yaw: 180,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "quad7",
    },
    {
      pitch: -30,
      yaw: -90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "insert to clinic",
    },
  ],
},

GSTOCRBack: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1TOCR.jpg",
  hfov: 300,
  pitch: 10,
  yaw: -170,
  hotSpots: [
    {
      pitch: 1,
      yaw: -5,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "2ND FLOOR GS",
    },
    {
      pitch: -30,
      yaw: 45,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSCR",
    },
    {
      pitch: -30,
      yaw: 85,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
    {
      pitch: -10,
      yaw: 180,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "quad7",
    },
    {
      pitch: -30,
      yaw: -90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "insert to clinic",
    },
  ],
},

GSCR: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS2CR.jpg",
  hfov: 400,
  pitch: -20,
  yaw: -20,
  hotSpots: [
    {
      pitch: -30,
      yaw: 90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSTOCRBack",
    },
  ],
},
GS1: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS2",
    },
  ],
},
GSCANTEEN: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GSCANTEEN.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS2",
    },
  ],
},
GS2: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS2.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS1",
    },
    {
      pitch: -30,
      yaw: 100,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GSCANTEEN",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS4",
    },
  ],
},
GS3: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS3.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS2",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS4",
    },
  ],
},
GS4: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS4.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS3",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS5",
    },
  ],
},
GS5: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS5.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS4",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
  ],
},
GS6: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS6.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS5",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSTOCRBack",
    },
  ],
},

GS8: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS8.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -120,
  hotSpots: [
    {
      pitch: -10,
      yaw: -60,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
    {
      pitch: -40,
      yaw: 220,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
  ],
},

GS8Back: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS8.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -120,
  hotSpots: [
    {
      pitch: -10,
      yaw: -60,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
    {
      pitch: -40,
      yaw: 220,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
  ],
},

      //REGISTRAR
      reg1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/1.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -12,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Backscene5",
          },

          {
            pitch: -10,
            yaw: 25,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -5,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },
          
        ],
      },
      reg1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/1.jpg",
        hfov: 200,
        yaw: -180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Backscene5",
          },
          {
            pitch: -10,
            yaw: 25,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -5,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },
        ],
      },

      reg1Backscene5: {
        type: "equirectangular",
        panorama: "3 main entrance/3.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7",
          },
          {
            pitch: -30,
            yaw: -100,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene4",
          },
          {
            pitch: -35,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "reg1",
          },
          
        ],
      },
      reg2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -12,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Back",
          },

          {
            pitch: -10,
            yaw: 30,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 3</b><br><br>\
             BSHM | BSIT | BSED/BSED/BSAIS/BSIA III\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             <b>OTHERS:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Tutorial Request</li>\
                 <li>Dropping/Adding Form</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch: -7,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 4</b><br><br>\
             ALL HIGH SCHOOL | COLLEGE STUDENTS\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certification, Authentication, Verification (C.A.V.)</li>\
                 <li>ESC Scholarship</li>\
                 <li>T.E.S. Scholarship</li>\
                 <li>CHED STUFAP’s Scholarship</li>\
             </ul>\
             <b>Certifications (Scholarship):</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certifications related to Scholarships</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch:-8,
            yaw: 137,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -10,
            yaw: 120,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },

          
        ],
      },
      reg2Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Back",
          },
          {
            pitch: -10,
            yaw: 30,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 3</b><br><br>\
             BSHM | BSIT | BSED/BSED/BSAIS/BSIA III\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             <b>OTHERS:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Tutorial Request</li>\
                 <li>Dropping/Adding Form</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch: -7,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 4</b><br><br>\
             ALL HIGH SCHOOL | COLLEGE STUDENTS\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certification, Authentication, Verification (C.A.V.)</li>\
                 <li>ESC Scholarship</li>\
                 <li>T.E.S. Scholarship</li>\
                 <li>CHED STUFAP’s Scholarship</li>\
             </ul>\
             <b>Certifications (Scholarship):</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certifications related to Scholarships</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch:-8,
            yaw: 137,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -10,
            yaw: 120,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },

        ],
      },
      reg3: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/3.jpg",
        hfov: 200,
        yaw: -17, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -17,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg4",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg2Back",
          },
          {
            pitch: -14,
            yaw: 35,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                <div style='text-align: center; font-size: 12px;'>\
                <b>FINANCE DEPARTMENT</b><br>\
                <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                <b>WINDOW 5</b><br><br>\
                Examination Permit<br>\
                Other signatory requirements\
                </div>\
                <div style='text-align: justify;'>\
                <b>Documents & Certifications:</b><br>\
                <ul style='margin-left: 0; padding-left: 15px;'>\
                    <li>Examination Permit</li>\
                    <li>Other signatory requirements</li>\
                </ul>\
                </div>\
            </div>",
          },
          {
            pitch: -10,
            yaw: 2,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
          
        ],
      },
      reg3Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2Back",
          },
          {
            pitch: -14,
            yaw: 35,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                <div style='text-align: center; font-size: 12px;'>\
                <b>FINANCE DEPARTMENT</b><br>\
                <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                <b>WINDOW 5</b><br><br>\
                Examination Permit<br>\
                Other signatory requirements\
                </div>\
                <div style='text-align: justify;'>\
                <b>Documents & Certifications:</b><br>\
                <ul style='margin-left: 0; padding-left: 15px;'>\
                    <li>Examination Permit</li>\
                    <li>Other signatory requirements</li>\
                </ul>\
                </div>\
            </div>",
          },
          {
            pitch: -10,
            yaw: 2,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
        ],
      },
      reg4: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/4.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg5",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg3Back",
          },
          {
            pitch: -10,
            yaw: 80,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
          
        ],
      },
      reg4Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/4.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg5",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg3Back",
          },
        ],
      },
      reg5: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/5.jpg",
        hfov: 200,
        yaw: -10,
        hotSpots: [
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg6",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg4Back",
          },
        ],
      },
      reg5Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/5.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg6",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg4Back",
          },
        ],
      },
      reg6: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/6.jpg",
        hfov: 200,
        yaw: 3, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg7",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg5Back",
          },
        ],
      },
      
      reg6Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/6.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg7",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg5Back",
          },
          {
            pitch: -15,
            yaw: 150,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>ACCOUNTING DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOW 10</b><br><br>\
                                    Signatory requirements from the Dean of the College of Information Technology\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Signatory requirements from the Dean of the College of Information Technology</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
        ],
      },
      reg7: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/7.jpg",
        hfov: 200,
        yaw: 20, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg8",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg6Back",
          },
        ],
      },
      reg7Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/7.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg8",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg6Back",
          },
        ],
      },
      reg8: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/8.jpg",
        hfov: 200,
        yaw: 5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg7Back",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "reg9",
          },
        ],
      },
      reg8Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/8.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg9",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg7Back",
          },
        ],
      },
      reg9: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/9.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob1",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      reg9Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/9.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 90,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg10",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },

      //ROBOTICS
      rob1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob1.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      rob1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob1.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      rob2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob2.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "TA3",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob1Back",
          },
        ],
      },
      rob2Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob2.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob1Back",
          },
        ],
      },
      TA3: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.jpg",
        hfov: 200,
        pitch: 0,
        yaw: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice7Back",
          },
          {
            pitch: 2,
            yaw: 77,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob2Back",
          },
        ],
      },
      // 2ND FLORR TEOFILO A BLDG
      STA: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.1.jpg",
        hfov: 200,
        yaw: 170, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STABack",
          },
          {
            pitch: -5,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go to 2nd Floor",
            sceneId: "STA1",
          },
        ],
      },
      STABack: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.jpg",
        hfov: 200,
        pitch: -20,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "WALA MUNA",
          },
          {
            pitch: 2,
            yaw: 77,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob2Back",
          },
        ],
      },

      // 2nd FLOOR TEOFILO
      STA1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA1.jpg",
        hfov: 200,
        yaw: 170, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA2",
          },
        ],
      },
      STA1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA2",
          },
        ],
      },
      STA2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: " right",
          },
          {
            pitch: -30,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA1Back",
          }
        ],
      },

      //COLLEGE LIBRARY Section
      colLib1: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      colLib2: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "EXIT",
            sceneId: "EXIT",
          },
        ],
      },

      //CLINIC
      clinic: {
        type: "equirectangular",
        panorama: "CLINIC/1RO4.jpg",
        hfov: 200,
        yaw: -30, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: -68,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "clinicInside",
          },
        ],
      },
      clinicInside: {
        type: "equirectangular",
        panorama: "CLINIC/1RO4.1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "clinic",
          },
        ],
      },
      //COMFORT ROOM 
      MCR: {
        type: "equirectangular",
        panorama: "CR/2AVR-CR.jpg",
        hfov: 200,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      CR: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      //*************************PAT CODE */
      PMH1: {
        type: "equirectangular",
        panorama: "PMH/PMH1.jpg",
        hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Move Forward",
                sceneId: "PMH_OP"// vice president office of hs
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Go Back",
                sceneId: "scene3"// entrance
            }
        ]
    }, PMH_OP: {
        type: "equirectangular",
        panorama: "PMH/PMH2.jpg",
        hfov:110,  
        yaw: 0,  // Adjust this value (default is 0) 
        hotSpots: [
            {
                pitch: -40,  
                yaw: -50,    
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Move Forward",
                sceneId: "PMH_DP"
            },{//back
                pitch: -30,  
                yaw: -140,    
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Move Forward",
                sceneId: "PMH_BACK1"
            }, {
            pitch: -10,
            yaw: 58,
            type: "info",
            text: "Office of the Principal <br> High School Department", //i hotspot info
        }, {
            pitch: -5,
            yaw: -84,
            type: "info",
            text: "Teachers room",
        }
        ]
    },PMH_BACK1: { //BACK2
        type: "equirectangular",
        panorama: "PMH/PMH1.jpg",
        hfov: 300,  
        yaw: 180,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Move Forward",
                sceneId: "PMH_OP"
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Go Back",
                sceneId: "scene3"// entrance
            }
        ]
    },PMH_DP: {
        type: "equirectangular",
        panorama: "PMH/left and center option/1st floor/PMH1.3.jpg",
        hfov: 300,  
        yaw: 30,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 20,  
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Move Forward",
                sceneId: "PMH_FE"
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
                text: "Go Back",
                sceneId: "PMH_BACK1"
            }, {
                pitch: -5,
                yaw: -75,
                type: "info",
                text: "Office of the Department Heads",
            }
        ]
    }, PMH_BACK2: { //BACK3
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.3.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 20,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "PMH_FE"// fire exit
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "PMH_BACK1"/// SHOULD BE STRAIGHT TO THE GUARD
            }, {
                pitch: -5,
                yaw: -75,
                type: "info",
               text: "Office of the Department Heads",
            }
        ]
    },PMH_FE: {
        type: "equirectangular",
       panorama: "PMH/PMH3.jpg",
       hfov: 300,  
        yaw: 10,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 10,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "PMH_FES"// fire exit
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "PMH_BACK1"// dept head
            }
        ]
    },
    PMH_BACK3: {//BACK4
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.4.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "PMH_FES"
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "PMH_BACK2"
            }
        ]
    },PMH_FES: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.5.jpg",
       hfov: 100,  
        yaw: 30,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 20,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "PMH_BACK3"// fire exit
            },{
                pitch: -20,  
                yaw: 40,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "FES1"// STAIRS SIDES
            },{//back
                pitch: -30,  
                yaw: 190,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "PMH_BACK3"// dept head
            }
        ]
    },
    ////// Second floor Stairs Option //////
    FES1: {
      type: "equirectangular",
     panorama: "PMH/left and center option/2nd floor/PMH1.jpg",
     hfov: 300,  
      yaw: 45,  // Adjust this value (default is 0) 
      pitch:-8,
      hotSpots: [
          {
              pitch: -30,  
              yaw: 0,  
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Move Forward",
              sceneId: "FES1L"//left side
          },{
            pitch: -35,  
            yaw: 65,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "FES1R"//right side
          },{
            pitch: -50,  
            yaw: 140,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "FES1BK"//going down the right side of the stairs
          }, {
            pitch: -40,  
            yaw: -45,  
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Move Forward",
            sceneId: "scene109"//going down to the left side of the stairs
        }
      ]
  },FES1BK: {
    type: "equirectangular",
   panorama: "PMH/left and center option/1st floor/PMH1.5.jpg",
   hfov: 300,  
    yaw: 180,  // Adjust this value (default is 0) 
    pitch:-8,
    hotSpots: [
      {
        pitch: -30,  
        yaw: 10,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "scene105"//left side
    },{
            pitch: -20,  
            yaw: 40,  
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Move Forward",
            sceneId: "FES1"// STAIRS SIDES
        },{//back
            pitch: -30,  
            yaw: 190,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "PMH_BACK3"// dept head
        }
    ]
}, FES1L: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH1L.jpg",
 hfov: 300,  
  yaw: 180,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 180,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES2L"//left side
      },{
        pitch: -50,  
        yaw: 0,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES1LBK"//going down the stairs
      }
  ]
},FES1LBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH1.jpg",
hfov: 300,  
yaw: -130,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 0,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES1L"// leftside
    },{
      pitch: -35,  
      yaw: 65,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1R"//right side
    },{
      pitch: -50,  
      yaw: 140,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1BK"//going down the right side of the stairs
    },{
      pitch: -40,  
      yaw: -45,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1BK"//going down to the left side of the stairs
    }
]
},
FES2L: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH2L.jpg",
 hfov: 300,  
  yaw: 180,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 180,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES3L"//left side
      },{
        pitch: -50,  
        yaw: 0,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES2LBK"//going down the stairs
      }
  ]
},FES2LBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH1L.jpg",
hfov: 300,  
yaw: 0,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -35,  
        yaw: 0,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES1LBK"// leftside
    },{
      pitch: -35,  
      yaw: 180,  
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "FES2L"// leftside
  }
]
},
FES3L: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH3L.jpg",
 hfov: 300,  
  yaw: 180,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 180,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES4L"//left side
      },{
        pitch: -50,  
        yaw: 0,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES3LBK"//going down the stairs
      }
  ]
},FES3LBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH2L.jpg",
hfov: 300,  
yaw: 0,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -35,  
        yaw: 0,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES2LBK"// leftside
    },{
      pitch: -35,  
      yaw: 180,  
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "FES3L"// leftside
  }
]
},
FES4L: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH4L.jpg",
 hfov: 300,  
  yaw: 180,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -40,  
          yaw: 180,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "scene1"//left side
      }, {
        pitch: -15,
        yaw: 180,
        type: "info",
       text: "Dead End <br> if you click <br> you will be proceed <br> in the entrance <br> of the scool",
    },{
        pitch: -50,  
        yaw: -5,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES4LBK"//going down the stairs
      }
  ]
},FES4LBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH3L.jpg",
hfov: 300,  
yaw: 0,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -35,  
        yaw: 0,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES3LBK"// leftside
    },{
      pitch: -35,  
      yaw: 180,  
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "FES4L"// leftside
  }
]
},
FES1R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH1R.jpg",
 hfov: 300,  
  yaw: 5,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 5,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES2R"//left side
      },{
        pitch: -50,  
        yaw: 180,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES1RBK"//going down the stairs
      }
  ]
},FES1RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH1.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 0,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES1L"// leftside
    },{
      pitch: -35,  
      yaw: 65,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1R"//right side
    },{
      pitch: -50,  
      yaw: 140,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1BK"//going down the right side of the stairs
    },{
      pitch: -40,  
      yaw: -45,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1BK"//going down to the left side of the stairs
    }
]
},

FES2R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH2R.jpg",
 hfov: 300,  
  yaw: 5,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 5,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES3R"//left side
      },{
        pitch: -50,  
        yaw: 180,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES2RBK"//going down the stairs
      }
  ]
},FES2RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH1R.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 5,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES1R"// leftside
    },{
      pitch: -50,  
      yaw: 180,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES1LBK"//going down the stairs
    }
]
},
FES3R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH3R.jpg",
 hfov: 300,  
  yaw: 5,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 5,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES4R"//left side
      },{
        pitch: -50,  
        yaw: 180,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES3RBK"//going down the stairs
      }
  ]
},FES3RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH2R.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 5,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES3R"// leftside
    },{
      pitch: -50,  
      yaw: 180,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES2RBK"//going down the stairs
    }
]
},

FES4R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH4R.jpg",
 hfov: 300,  
  yaw: 5,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 5,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES5R"//left side
      },{
        pitch: -50,  
        yaw: 180,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES4RBK"//going down the stairs
      }
  ]
},FES4RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH3R.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 5,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES4R"// leftside
    },{
      pitch: -50,  
      yaw: 180,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES3RBK"//going down the stairs
    }
]
},


FES5R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH5R.jpg",
 hfov: 300,  
  yaw: 5,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 5,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "FES6R"//left side
      },{
        pitch: -50,  
        yaw: 180,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES5RBK"//going down the stairs
      }
  ]
},FES5RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH4R.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 5,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES5R"// leftside
    },{
      pitch: -50,  
      yaw: 180,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES4RBK"//going down the stairs
    }
]
},


FES6R: {
  type: "equirectangular",
 panorama: "PMH/left and center option/2nd floor/PMH6R.jpg",
 hfov: 300,  
  yaw: 20,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
      {
          pitch: -30,  
          yaw: 20,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "scene1"//left side
      }
      , {
        pitch: -15,
        yaw: 20,
        type: "info",
       text: "Restricted <br> going back to the main entrance if you want to proceeds",
    }
    ,{
        pitch: -50,  
        yaw: 190,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "FES6RBK"//going down the stairs
      }
  ]
},FES6RBK: {
type: "equirectangular",
panorama: "PMH/left and center option/2nd floor/PMH5R.jpg",
hfov: 300,  
yaw: -150,  // Adjust this value (default is 0) 
pitch:-8,
hotSpots: [
    {
        pitch: -25,  
        yaw: 10,  
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "FES6R"// leftside
    },{
      pitch: -50,  
      yaw: 180,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Go Back",
      sceneId: "FES5RBK"//going down the stairs
    }
]
},

 ////////ground flour///// 
    scene105: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.6.jpg",
       hfov: 300,  
        yaw: 30,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 25,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene106"// fire exit
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "PMH_FS"// dept head
            }
        ]
    },
    back105: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.5.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: -5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene105"
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back104"
            }
        ]
    },
    scene106: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.7.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene107"// fire exit
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back106"// dept head
            }, {
                pitch: -5,
                yaw: -65,
                type: "info",
               text: "HR and Admin Office",
            }
        ]
    },
    back106: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.6.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -30,  
                yaw: 15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene106"
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back105"
            }
        ]
    },
    scene107: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.8.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene108"// fire exit
            },{//right side
                pitch: -35,  
                yaw: 85,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene200"// hallway 
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back107"// dept head
            }
        ]
    },
    back107: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.7.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: -5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene107"
            },{//back
                pitch: -30,  
                yaw: 180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back106"
            }
        ]
    },
    scene108: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.9.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene109"// fire exit
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back108"// dept head
            }, {
                pitch: -5,
                yaw: -80,
                type: "info",
               text: "Guidance Office<br> High School",
            }
        ]
    },
    back108: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.8.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene108"
            },{//right side
              pitch: -35,  
              yaw: 85,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Move Forward",
              sceneId: "scene200"// hallway 
          },{//back
                pitch: -30,  
                yaw: 185,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back107"
            }
        ]
    },
    scene109: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.10.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: 0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene110"// fire exit
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back109"// dept head
            },{//stairs option going up 
              pitch: -15,  
              yaw: 160,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Go Back",
              sceneId: "FES1"// dept head
          }, {
                pitch: -5,
                yaw: -75,
                type: "info",
               text: "Behavior Management <br> Coordinator's Office<br>Basic Education",
            }
        ]
    },
    back109: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.9.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: -5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene109"
            },{//back
                pitch: -30,  
                yaw: 170,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back108"
            }
        ]
    },
    scene110: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.11.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -45,  
                yaw: 1,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene1100"// fire exit
            },{//back
                pitch: -30,  
                yaw: 175,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back109"// dept head
            }, {
                pitch: -5,
                yaw: -50,
                type: "info",
               text: "Student Personnel <br> Service Office",
            }
        ]
    },
    back110: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMH1.11.jpg",
       hfov: 300,  
        yaw: 180,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: -5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene1100"
            },{//back
                pitch: -30,  
                yaw: 160,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back109"
            },{//back
                pitch: -12,  
                yaw: 145,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back109"
            }
        ]
    },
   scene1100: {
        type: "equirectangular",
       panorama: "PMH/PMH4.jpg",
       hfov: 300,  
        yaw: 100,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -45,  
                yaw: 90,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene111"// fire exit
            },{//back
                pitch: -30,  
                yaw: 260,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backscene1100"// dept head
            }
        ]
    },
    backscene1100: {
        type: "equirectangular",
       panorama: "PMH/PMH4.jpg",
       hfov: 300,  
        yaw: 270,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -35,  
                yaw: -280,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene111"
            },{//back
                pitch: -30,  
                yaw: 270,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back110"
            }
        ]
    },
    scene111: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/PMHlast view.jpg",
       hfov: 300,  
        yaw: 5,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -40,  
                yaw:0,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene1"// not indicated
            }, {
              pitch: -25,
              yaw: 0,
              type: "info",
             text: "Dead End, Will be redirect to the entrance ",
          },{//back
                pitch: -40,  
                yaw: 70,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backscene1100"
            }
        ]
    },
    back111: {
        type: "equirectangular",
       panorama: "PMH/left and center option/1st floor/1.10.jpg",
       hfov: 300,  
        yaw: 190,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw: -5,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "back110"
            },{//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back110"
            }
        ]
    }, scene112: { // OFFICE OF THE VICE AND PRESIDENT OFFICE 
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH1.jpg",
       hfov: 300,  
        yaw: -20,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw:-15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene113"// not indicated
            },{//back
                pitch: -40,  
                yaw: 160,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "scene3"
            }, {
                pitch: -15,
                yaw: 60,
                type: "info",
               text: "Office of the Vice Principal <br> For Academic Affairs",
            }
        ]
    },
    back112: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH1.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -30,  
                yaw: -15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene113"
            },{//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "scene3"
            }, {
                pitch: -15,
                yaw: 60,
                type: "info",
               text: "Office of the Vice Principal <br> For Academic Affairs",
            }
        ]
    },
    scene113: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH2.jpg",
       hfov: 300,  
        yaw: -20,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -25,  
                yaw:-15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene114"// not indicated
            },{//back
                pitch: -40,  
                yaw: 160,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back112"
            }, {
                pitch: -15,
                yaw: 45,
                type: "info",
               text: "Office of the Principal",
            }
        ]
    },
    back113: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH2.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//left
                pitch: -30,  
                yaw: -15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene114"
            },{//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back112"
            }, {
                pitch: -15,
                yaw: 45,
                type: "info",
               text: "Office of the Vice Principal <br> For Academic Affairs",
            }
        ]
    }, 
    scene114: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.jpg",
       hfov: 300,  
        yaw: -20,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -50,  
                yaw:-55,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene202"// not indicated side ng kay fiona
            },{//right
                pitch: -40,  
                yaw: 25,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene115"
            }
            ,{//back
                pitch: -40,  
                yaw: 160,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back113"
            }
        ]
    },
    back114: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {
                pitch: -55,  
                yaw: -55,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene114"
            },{//right
                pitch: -55,  
                yaw: 25,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene115"
            }
            ,{//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back113"
            }
        ]
    },
    scene115: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.1.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:-15,
        hotSpots: [
            {
                pitch: -140,  
                yaw:300,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene116"// not indicated
            },{//back
                pitch: -40,  
                yaw: 300,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back115"
            }
        ]
    },
    back115: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.1.jpg",
       hfov: 300,  
        yaw: 300,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//left
                pitch: -50,  
                yaw: -55,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "back114"
            },
            {//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back112"
            }
        ]
    },
    scene116: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.2.jpg",
       hfov: 360,  
        yaw: 70,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//right
                pitch: -45,  
                yaw: 80,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "stairs2f"
            }
            ,{//back
                pitch: -40,  
                yaw: -20,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back115"
            }
        ]
    },
    back116: { // back hotspot is not correct
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.1.jpg",
       hfov: 300,  
        yaw: -360,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//left
                pitch: -50,  
                yaw: 55,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "stairs2f"
            },
            {//back
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back115"
            }
        ]
    },
    stairs2f: {
        type: "equirectangular",
       panorama: "PMH/NEW PMH/1st floor/PMH9.jpg",
       hfov: 300,  
        yaw: -100,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//right
                pitch: -45,  
                yaw: -100,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "stairsSF1"
            }
            ,{//back
                pitch: -30,  
                yaw: -180,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs1"
            }
        ]
    },
    backstairs: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.1.jpg",
       hfov: 300,  
        yaw: -150,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//left
                pitch: -30,  
                yaw: 150,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "stairsSF1"
            },
            {//back
                pitch: -50,  
                yaw: -55,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "stairsSF1"
            }
        ]
    },
    stairsSF1: {
        type: "equirectangular",
       panorama: "PMH/NEW PMH/1st floor/PMH9.1.jpg",
       hfov: 300,  
        yaw: 40,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//right
                pitch: -30,  
                yaw: -15,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "SF1"
            }
            ,{//back
                pitch: -45,  
                yaw: 40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs1"
            }
        ]
    },
    backstairs1: {
        type: "equirectangular",
       panorama: "PMH/right option/first floor/PMH3.1.2.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//up
                pitch: -50,  
                yaw: -55,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "back116"
            }, {//down
                pitch: -30,  
                yaw: 100,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "stairsSF1"
            }
        ]
    },
   SF1: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.jpg",
       hfov: 300,  
        yaw: -180,  // Adjust this value (default is 0) 
        pitch:-20,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: -170,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "SF2"
            }
            ,{//back
                pitch: -45,  
                yaw: -120,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs2"
            },{//right side
                pitch: -35,  
                yaw: -220,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab"
            },{//left side
                pitch: -35,  
                yaw: -260,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: ""
            }
        ]
    },
    backstairs2: {
        type: "equirectangular",
       panorama:  "PMH/NEW PMH/1st floor/PMH9.1.jpg",
        yaw: 60,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//up
                pitch: -30,  
                yaw: -15,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "SF1"
            }, {//down
                pitch: -45,  
                yaw: 40,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "backstairs1"
            }
        ]
    },
    comlab: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.1.jpg",
       hfov: 300,  
        yaw: 130,  // Adjust this value (default is 0) 
        pitch:-5,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 130,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab2"
            }, {
                pitch: -10,
                yaw: 110,
                type: "info",
               text: "Computer Lab",
            }
            ,{//back
                pitch: -45,  
                yaw: -120,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs3"
            }
        ]
    },
    backstairs3: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -30,  
                yaw: 190,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "SF1"
            },  {//backdoor
                pitch: -30,  
                yaw: -90,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "teofilo"
            }, {//down
                pitch: -35,  
                yaw: -120,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "backstairs2"
            },{//right side
                pitch: -35,  
                yaw: -220,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab"
            },{//left side
                pitch: -35,  
                yaw: -260,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: ""
            }
        ]
    },
    comlab2: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.2.jpg",
       hfov: 300,  
        yaw: 130,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 100,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab3"
            }, {
                pitch: 5,
                yaw: 15,
                type: "info",
               text: "Computer Lab",
            }
            ,{//back
                pitch: -45,  
                yaw: 300,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs4"
            }
        ]
    },
    backstairs4: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.1.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab2"
            },{//back
                pitch: -45,  
                yaw: -90,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs3"
            }
        ]
    },
    comlab3: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.3.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 110,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab4"
            }
            ,{//back
                pitch: -45,  
                yaw: -55,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs5"
            }
        ]
    },
    backstairs5: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.2.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -150,  
                yaw: -70,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab3"
            },{//back
                pitch: -45,  
                yaw: 290,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs4"
            }
        ]
    },comlab4: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.4.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 118,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab5"
            }
            ,{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs6"
            }, {
                pitch: -10,
                yaw: 15,
                type: "info",
               text: "Computer Laboratory 2",
            }
        ]
    },
    backstairs6: {//comlab 4
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.3.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -30,  
                yaw: 113,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab4"
            },{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs5"
            }
        ]
    },comlab5: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.5.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 118,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab6"
            }
            ,{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs7"
            }
        ]
    },
    backstairs7: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.4.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -30,  
                yaw: 113,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab5"
            },{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs6"
            }
        ]
    },comlab6: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.6.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 118,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab7"
            }
            ,{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs8"
            }
        ]
    },
    backstairs8: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.5.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -30,  
                yaw: 113,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab6"
            },{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs7"
            }
        ]
    },comlab7: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.7.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 118,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab8"
            }
            ,{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs9"
            }
        ]
    },
    backstairs9: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.6.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab7"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs8"
            }
        ]
    },comlab8: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.8.jpg",
       hfov: 300,  
        yaw: 120,  // Adjust this value (default is 0) 
        pitch:0,
        hotSpots: [
            {//up stairs
                pitch: -30,  
                yaw: 118,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab10"
            },{//right side stairs
                pitch: -45,  
                yaw: 210,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab9"////////stairs 
            }
            ,{//back
                pitch: -45,  
                yaw: -60,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs10"
            }
        ]
    },
    backstairs10: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.7.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab8"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs9"
            }
        ]
    },comlab9: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.8.1.jpg",
       hfov: 300,  
        yaw: -94,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 180,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab10" //going down
            }, {
                pitch: -50,
                yaw: 180,
                type: "info",
               text: "Going Down is not done",
            },{//right side stairs
                pitch: -45,  
                yaw: 75,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab8"// going back to the hall 
            }
            ,{//back
                pitch: -45,  
                yaw: 0,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs10"// going down
            }, {
                pitch: -40,
                yaw: 0,
                type: "info",
               text: "Going Down is not done",
            }
        ]
    },
    backstairs11: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.8.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab9"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs10"
            }
        ]
    },comlab10: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.9.jpg",
       hfov: 300,  
        yaw: 0,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab11" //going down
            } ,{//back
                pitch: -45,  
                yaw: 0,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs11"// going down
            }
        ]
    },
    backstairs12: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.8.1.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab10"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs11"
            }
        ]
    },comlab11: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.10.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab12" //going down
            } ,{//back
                pitch: -45,  
                yaw: 0,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs12"// going down
            }
        ]
    },
    backstairs13: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.9.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab11"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs12"
            },{//right
                pitch: -45,  
                yaw: 200,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs11"
            }, {
                pitch: -45,
                yaw: 200,
                type: "info",
               text: "Scene is not indicated yet",
            }
        ]
    },comlab12: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.11.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab13" //going down
            } ,{//back
                pitch: -45,  
                yaw: 0,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs13"// going down
            }
        ]
    },
    backstairs14: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.10.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab12"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs13"
            }
        ]
    },comlab13: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.12.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab14" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs14"// going down
            }, {
                pitch: -35,
                yaw: 45,
                type: "info",
               text: "Teahers Room?",
            }
        ]
    },
    backstairs15: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.11.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab14"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs14"
            }
        ]
    },comlab14: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.13.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab15" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs15"// going down
            },
        ]
    },
    backstairs16: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.12.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab15"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs15"
            }
        ]
    },comlab15: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.14.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab16" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs16"// going down
            },
        ]
    },
    backstairs17: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.13.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -45,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab16"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs16"
            }
        ]
    },comlab16: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab17" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs16"// going down
            },{//right side
              pitch: -45,  
              yaw: 210,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Go Back",
              sceneId: "backstairs16"
          }, {
              pitch: -45,
              yaw: 210,
              type: "info",
             text: "Kay Fionang Part",
          }
        ]
    },
    backstairs18: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.14.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: 50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab16"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs17"
            }
        ]
    },comlab17: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.1.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab18" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs17"// going down
            },
        ]
    },
    backstairs19: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab17"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs18"
            }
        ]
    },comlab18: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.1.2.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "comlab19" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs18"// going down
            },
        ]
    },
    backstairs20: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.1.jpg",
       hfov: 300,
        yaw: -70,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab18"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs19"
            }
        ]
    },comlab19: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.1.3.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 140,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "scene1" //going down
            } ,{//back
                pitch: -45,  
                yaw: 320,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs19"// going down
            }, {
              pitch: -50,
              yaw: 140,
              type: "info",
             text: "This is the Dead End <br> if you click you will be redirect in the entarance",
          }
        ]
    },
    backstairs21: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.15.1.2.jpg",
       hfov: 300,
        yaw: -80,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
            {//stairs up
                pitch: -50,  
                yaw: 130,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab19"
            },{//back
                pitch: -45,  
                yaw: -40,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs20"
            }
        ]
    },SF2: {
        type: "equirectangular",
       panorama: "PMH/right option/third floor/PMH1.jpg",
       hfov: 300,  
        yaw: 150,  // Adjust this value (default is 0) 
        pitch:-10,
        hotSpots: [
            {//up stairs
                pitch: -50,  
                yaw: 160,  
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Move Forward",
                sceneId: "SF3" //going down
            } ,{//back
                pitch: -48,  
                yaw: 220,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "SF2bk"// going down
            }
        ]
    },
    SF2bk: {
        type: "equirectangular",
       panorama: "PMH/right option/second floor/PMH1.1.jpg",
       hfov: 300,
        yaw: 35,  // Adjust this value (default is 0) 
        pitch:-8,
        hotSpots: [
             {//going up
              pitch: -30,  
              yaw: 190,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Go Back",
              sceneId: "SF2"
          },{//right side to comlab
                pitch: -30,  
                yaw: 150,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "comlab"
            },{//left side to comlab
              pitch: -35,  
              yaw: 110,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Go Back",
              sceneId: ""
          },{//back
                pitch: -45,  
                yaw: 250,    
                type: "custom",
                createTooltipFunc: groundHotspot,
               text: "Go Back",
                sceneId: "backstairs2"
            }
        ]
    },SF3: {
      type: "equirectangular",
     panorama: "PMH/NEW PMH/3rd floor/PMH1.jpg",
     hfov: 300,  
      yaw: 0,  // Adjust this value (default is 0) 
      pitch:-10,
      hotSpots: [
          {//up stairs
              pitch: -30,  
              yaw: -20,  
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Move Forward",
              sceneId: "SF4" //going down
          } ,{//left side
            pitch: -30,  
            yaw: 200,  
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Move Forward",
            sceneId: "" //going down
        } ,{//back
          pitch: -48,  
          yaw: 110,    
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Go Back",
          sceneId: "SF3bk"// going down
      }
      ]
  },
  SF3bk: {
      type: "equirectangular",
     panorama:"PMH/right option/third floor/PMH1.jpg",
     hfov: 300,
      yaw: -125,  // Adjust this value (default is 0) 
      pitch:-8,
      hotSpots: [
           {//going up
            pitch: -30,  
            yaw: 165,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "SF3"
        },{//back
              pitch: -55,  
              yaw: 250,    
              type: "custom",
              createTooltipFunc: groundHotspot,
             text: "Go Back",
              sceneId: "SF2bk"
          }
      ]
  },SF4: {
    type: "equirectangular",
   panorama: "PMH/NEW PMH/3rd floor/PMH2.jpg",
   hfov: 300,  
    yaw: 0,  // Adjust this value (default is 0) 
    pitch:-10,
    hotSpots: [
        {
           pitch: -55,  
           yaw: 0,    
           type: "custom",
           createTooltipFunc: groundHotspot,
          text: "Go Back",
           sceneId: "SF5"
        } ,{//back
          pitch: -48,  
          yaw: 110,    
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Go Back",
          sceneId: "SF4bk"// going down
      }
    ]
},
SF4bk: {
    type: "equirectangular",
   panorama:"PMH/NEW PMH/3rd floor/PMH1.jpg",
   hfov: 300,
    yaw: 120,  // Adjust this value (default is 0) 
    pitch:-8,
    hotSpots: [
      ,{//going up
        pitch: -55,  
        yaw: -30,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Move Forward",
        sceneId: "SF4"
    },{//going down
          pitch: -55,  
          yaw: 115,    
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Go Back",
          sceneId: "SF3"
      }
    ]///
},SF5: {
  type: "equirectangular",
 panorama: "PMH/NEW PMH/3rd floor/PMH3.jpg",
 hfov: 300,  
  yaw: 0,  // Adjust this value (default is 0) 
  pitch:-10,
  hotSpots: [
      {//up stairs
          pitch: -30,  
          yaw: -3,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "SF6" //going down
      } ,{//back
        pitch: -48,  
        yaw: 190,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "SF5bk"// going down
    }
  ]
},
SF5bk: {
  type: "equirectangular",
 panorama:"PMH/NEW PMH/3rd floor/PMH2.jpg",
 hfov: 300,
  yaw: 110,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
    ,{//going up
      pitch: -55,  
      yaw: -10,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "SF4"
  },{//going down
    pitch: -55,  
    yaw: 110,    
    type: "custom",
    createTooltipFunc: groundHotspot,
   text: "Go Back",
    sceneId: "SF3"
}
  ]
},SF6: {
  type: "equirectangular",
 panorama: "PMH/NEW PMH/3rd floor/PMH4.jpg",
 hfov: 300,  
  yaw: -20,  // Adjust this value (default is 0) 
  pitch:-5,
  hotSpots: [
      {//up stairs
          pitch: -60,  
          yaw: -75,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "SF7" //going down
      } ,{//back
        pitch: -48,  
        yaw: 190,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "SF6bk"// going down
    }
  ]
},
SF6bk: {
  type: "equirectangular",
 panorama:"PMH/NEW PMH/3rd floor/PMH3.jpg",
 hfov: 300,
  yaw: 110,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
    ,{//going up
      pitch: -55,  
      yaw: -10,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "SF5"
  },{//going down
    pitch: -55,  
    yaw: 110,    
    type: "custom",
    createTooltipFunc: groundHotspot,
   text: "Go Back",
    sceneId: "SF4"
}
  ]
},SF7: {
  type: "equirectangular",
 panorama: "PMH/NEW PMH/3rd floor/PMH5.jpg",
 hfov: 300,  
  yaw: 150,  // Adjust this value (default is 0) 
  pitch:-5,
  hotSpots: [
      {//up stairs
          pitch: -40,  
          yaw: 170,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "SF8" //going down
      } ,{//back
        pitch: -48,  
        yaw: 0,    
        type: "custom",
        createTooltipFunc: groundHotspot,
       text: "Go Back",
        sceneId: "SF7bk"// going down
    }
  ]
},
SF7bk: {
  type: "equirectangular",
 panorama:"PMH/NEW PMH/3rd floor/PMH4.jpg",
 hfov: 300,
  yaw: 180,  // Adjust this value (default is 0) 
  pitch:-8,
  hotSpots: [
    ,{//going up
      pitch: -55,  
      yaw: 185,    
      type: "custom",
      createTooltipFunc: groundHotspot,
     text: "Move Forward",
      sceneId: "SF6bk"
  },{//going down
    pitch: -55,  
    yaw: -75,    
    type: "custom",
    createTooltipFunc: groundHotspot,
   text: "Go Back",
    sceneId: "SF5"
}
  ]
},SF8: {
  type: "equirectangular",
 panorama: "PMH/NEW PMH/3rd floor/PMH6.jpg",
 hfov: 300,  
  yaw: -20,  // Adjust this value (default is 0) 
  pitch:-5,
  hotSpots: [
      {//up stairs
          pitch: -60,  
          yaw: -75,  
          type: "custom",
          createTooltipFunc: groundHotspot,
         text: "Move Forward",
          sceneId: "SF7" //going down
      } 
  ]
},




      /********************************* KAY FIONA *************************************************************** */
      // Gate malapit sa OSA
      // Gate malapit sa OSA
      scene200: {
        type: "equirectangular",
        panorama: "PMH/left and center option/1st floor/PMH3.1.jpg",
        hfov: 110,
        yaw: 10, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -30,
            yaw: +10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene201",
          },{//back
            pitch: -48,  
            yaw: 180,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "back108"// going down
        }
        ],
      }, 
      
      back200: {
        type: "equirectangular",
        panorama: "PMH/left and center option/1st floor/PMH3.1.jpg",
        hfov: 110,
        yaw: 190, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -30,
            yaw: +10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene201",
          },{//back
            pitch: -48,  
            yaw: 180,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "back108"// going down
        }
        ],
      }, // back not indicated, sa second gate
      scene201: {
        type: "equirectangular",
        panorama: "PMH/left and center option/1st floor/PMH3.2.jpg",
        hfov: 110,
        yaw: 0, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -30,
            yaw: -80,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene202",
          },{//back
            pitch: -48,  
            yaw: 180,    
            type: "custom",
            createTooltipFunc: groundHotspot,
           text: "Go Back",
            sceneId: "back200"// going down
        },
          {
            pitch: -35, // U/D
            yaw: 85, // -L/+R
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene3", // ung my tricycle
          },
        ],
      },
      /********************************* KAY FIONA *************************************************************** */
      // Gate malapit sa OSA
      // left side of board all the way to the new hall
      scene202: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.1.jpg",
        hfov: 200,
        yaw: 300, // Adjusted to match the hallway direction
        pitch: -5, // Slight downward tilt to match the perspective
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene203",
          },
        ],
      },
      scene203: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.2.jpg",
        hfov: 200,
        yaw: 300, // Adjusted to match the hallway direction
        pitch: -5, // Slight downward tilt to match the perspective
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene204",
          },
        ],
      },

      scene204: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.3.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene205",
          },
        ],
      },
      scene205: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.4.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene206",
          },
        ],
      },
      scene206: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.5.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene207",
          },
        ],
      },
      scene207: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.7.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene208",
          },
        ],
      },
      scene208: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.8.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene209",
          },
        ],
      },
      scene209: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.9.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene210",
          },
        ],
      },
      scene210: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.10.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
        ],
      },
      scene211: {
        // may hotspot paakyat sa 2nd floor ng odulio
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.11.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene212",
          },
          {
            //other hotspot
            pitch: -60,
            yaw: 350,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene220",
          },
        ],
      },
      scene212: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.12.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene213",
          },
        ],
      },
      scene213: {
        // hotspot papuntang 1st floor ng odulio  connected sa scene 222
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.13.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -40,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene214",
          },
          {
            //other hotspot
            pitch: -40,
            yaw: 335,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene222",
          },
        ],
      },
      scene214: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 295,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene215",
          },
        ],
      },
      scene215: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 295,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene216",
          },
        ],
      },
      scene216: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.3.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 200,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene217",
          },
        ],
      },
      scene217: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.4.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene218",
          },
        ],
      },
      scene218: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene219",
          },
        ],
      },
      scene219: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/last view of both 1.1 and 2.1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene220",
          },
        ],
      },
      scene220: {
        // 2nd floor Ricardo Odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene221",
          },
        ],
      },
      scene221: {
        // 1st floor Ricardo Odulio  connect sa 213
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.0.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene222",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
        ],
      },
      scene222: {
        // 1st floor Ricardo Odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene212",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene223",
          },
        ],
      },
      scene223: {
        //1st floor ng ricardo odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/4.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 110, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -25,
            yaw: -270,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene224",
          },
        ],
      },
      scene224: {
        //1st floor ng ricardo odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/5.jpg",
        hfov: 0,
        pitch: 0,
        yaw: 110, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -25,
            yaw: -275,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene225",
          },
        ],
      },
      //   COMPUTER LAB
      comp1: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/second floor/1.1.2.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -5, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
      //   GYMNASIUM
      gym1: {
        type: "equirectangular",
        panorama: "gymnasium/5 - back.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -5, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
      //   LIBRARY
      lib1: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/third floor/3.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
    },
  });

  // Attach event listeners to all links
  document.querySelectorAll("#locationDropdown a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop default link behavior

      // If link has `data-scene`, switch panorama scene
      if (this.hasAttribute("data-scene")) {
        const sceneId = this.getAttribute("data-scene");
        viewer.loadScene(sceneId); // Switch to the specified scene (e.g., reg1)
      }
      // For other links (Building 1, Library, etc.), navigate normally
      else {
        window.location.href = this.getAttribute("href");
      }
    });
  });
});
