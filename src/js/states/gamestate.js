states.game = {

    step(dt) {

        E.player.update(dt);

        //----hacky sound test
        if(Key.justReleased(Key.z)){
          E.songTrigger = true
        }
        if(E.songTrigger){
          E.playSound(E.sounds.song, 1, 1, 0);
          E.songTrigger = false;
        }
        //---end hacky sound test

        bulletPool.use();

        Key.update();
    },

    render(dt) {

        E.renderTarget = 0x00000;

        E.gfx.clear(1);

        //E.gfx.checker(256, 256, 16,16, 2);

        //this.renderColorNumbers();

        //this.renderDrawingAPI();

        // for(i=2500;i--;){
        //
        //   Z=60-(E.t*50+i)%60;  //depth
        //   s=(300/Z)|0; //scale factor
        //   // E.gfx.fr(
        //   //   (128+1/Z*(-99+i*6e72%199)*128), //x
        //   //   (128+(-70+i*8e61%140)/Z*128),  //y
        //   //   s, s, //width height
        //   //   21 //color
        //   // );
        //
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     15 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     16 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     17 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     18 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     19 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     20 //color
        //   );
        //   Z -= 1;
        //   E.gfx.pset(
        //     (128+1/Z*(-99+i*6e72%199)*128), //x
        //     (128+(-70+i*8e61%140)/Z*128),  //y
        //     //s, s, //width height
        //     21 //color
        //   );
        // }

        E.player.draw();

    },

    renderColorNumbers(){

      for(var i = 0; i < 32; i++){
        Txt.text({
          x: i < 16 ? ( 3+16*i ) : ( 3 + 16* (i-16) ) ,
          y: i < 16 ? 45 : 45 + 16,
          text: i.toString(),
          scale: 1,
          snap: 1,
          hspacing: 1,
          vspacing: 2,
          halign: 'left',
          valign: 'bottom',
          render: 1,
          color: i,
        })
      }


      Txt.text({
              x: 8,
              y: 240,
              text: "X: "+E.player.x.toString().substring(0,7) +
                    "\nY: "+E.player.y.toString().substring(0,7),
              hspacing: 2,
              vspacing: 2,
              halign: 'left',
              valign: 'top',
              scale: 1,
              snap: 1,
              render: 1,
              color: 21,
          });

    },

    renderDrawingAPI(){
      E.gfx.pset(16*2, 16*5, 21);

      E.gfx.line(16*4, 16*5, 16*5, 16*7, 21);

      E.gfx.rect(16*6, 16*5, 16, 32, 21);

      E.gfx.circle(16*8, 16*6, 16, 21);
    }

};
