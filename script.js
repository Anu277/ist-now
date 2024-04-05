let countdown;
    
    function startCountdown() {
      const hoursInput = document.getElementById('hours');
      const minutesInput = document.getElementById('minutes');
      const secondsInput = document.getElementById('seconds');

      const hours = parseInt(hoursInput.value);
      const minutes = parseInt(minutesInput.value);
      const seconds = parseInt(secondsInput.value);

      const animatorElement = document.querySelector('.animator');
      animatorElement.style.top = '400px';

      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      // Disable the inputs and start button during the countdown
      hoursInput.disabled = true;
      minutesInput.disabled = true;
      secondsInput.disabled = true;
      document.querySelector('button').disabled = true;
      
      document.querySelector('.animator').style.display='block';
      document.querySelector('.animator').style.animationDuration=`${totalSeconds+1}`+'s';

      let timer = totalSeconds;
      countdown = setInterval(function () {
        const formattedTime = formatTime(timer);
        document.querySelector('.countdown h2').innerHTML = formattedTime;
        document.querySelector('.countdown h2').style.color='black';
        timer--;
        
        if(timer<=9){
          document.querySelector('.countdown h2').style.color='red';
          // Create an audio element
            var audio = new Audio();

            // Set the source of the audio file
            audio.src = "/timer audi.mp3.mp3";
            audio.play();

          if (timer < 0) {
                
            function reloadPage() {
              location.reload();
            }
            reloadPage();  
          }
        }
        else if (timer < 0) {
          clearInterval(countdown);
          // Re-enable the inputs and start button after the countdown is complete
          hoursInput.disabled = false;
          minutesInput.disabled = false;
          secondsInput.disabled = false;
          document.querySelector('button').disabled = false;
                
            function reloadPage() {
              location.reload();
            }
            reloadPage();    
        }
      }, 1000);  
    }

    function formatTime(timeInSeconds) {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = Math.floor(timeInSeconds % 60);

      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    
   