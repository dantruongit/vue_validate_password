var vm = new Vue({
    el : '#app',
    data: {
        password : '',
        length : 0,
        show : false,
        valid_length : false,
        valid_lower : false,
        valid_numeric : false,
        valid_uppercase : false
    },
    methods :{
        checked : function(){
            this.valid_numeric = false
            this.valid_lower = false
            this.valid_uppercase = false
            for(var chr of this.password)
            {
                if(chr == 'Enter' || chr == 'Control' || chr == 'Meta' || chr == 'Alt' || chr == 'Shift' || chr == 'CapsLock' || chr == 'Tab' ||
                chr == 'ContextMenu' || chr == ' ') {
                    continue
                }
                if(!isNaN(parseInt(chr * 1))){
                    this.valid_numeric = true;
                    continue
                }
                if(chr == chr.toLowerCase())
                {
                    this.valid_lower = true;
                    continue
                }
                else {
                    this.valid_uppercase = true;
                }
            }
        },
        listen : function(event){
            // console.log(event.key)
            var arr = ['F1','F2','F3','F4','F6','F7','F8','F9','F10','F11','F12',' ']
            for(var key of arr)
            {
                if(event.key == key) return
            }
            if(event.key == 'Enter' || event.key == 'Control' || event.key == 'Meta' || event.key == 'Alt' || event.key == 'Shift' || event.key == 'CapsLock' || event.key == 'Tab' ||
            event.key == 'ContextMenu') {
                return
            }
            if(!isNaN(event.key * 1)){
                this.valid_numeric = true;
                return
            }
            if(event.key == event.key.toLowerCase())
            {
                this.valid_lower = true;
                return
            }
            else if(event.key == event.key.toUpperCase()) {
                this.valid_uppercase = true;
                return
            }
            this.checked()
        }
    },
    watch: {
        password : function()
        {
            if(this.password!=''){
                this.show = true ;
                this.length = this.password.length;
                this.valid_length = this.length >= 8 ;
            } 
            else this.show = false;
            this.checked()
        }
    }
})