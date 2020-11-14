
    
    
    /*
    
    
    //Le formulaire
    
    
    
    
    var bool = false;
    function switche(){
        if(bool == false){
            document.getElementById('secondform').classList.add('active');
            document.getElementById('secondform').classList.remove('inactive');
            bool = true;
        } else if(bool == true){
            document.getElementById('secondform').classList.add('inactive');
            document.getElementById('secondform').classList.remove('active');
            bool = false;
        }
    }

    function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = "";
        }
        });
    });
    }







   */

