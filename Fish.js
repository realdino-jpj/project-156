AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
  
        const position = { x: posX, y: posY, z: posZ };
        this.createfishs(id, position);
      }
    },
    createfishs: function (id, position) {
      const treasureEntity = document.querySelector("#fishModels");
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("material", "color", "#ff9100");
  
      fishEl.setAttribute("geometry", { primitive: "circle", radius: 1 });

      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");

      fishEl.setAttribute("scale",{
        x:0.2,
        y:0.2,
        z:0.2
      })

      fishEl.setAttribute("animation", {
        property: "position",
      to: "-100 10 -20",
        loop: "true",
        dur: 20000,
      });
  
      //set the static body attribute of physics system 
    fishEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2
    });

     //set the game play attribute
     fishEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

      
  
      treasureEntity.appendChild(fishEl);
    },
  });