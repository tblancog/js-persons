// ES5 Class declaration


/**
* Runnable class
*/
function Runnable() {
    this.init = function(){
        
        // Instance 3 Persons
        var p1 = new Person('John Doe', 35, '95000000', 'M', 75, 1.82);
        var p2 = new Person('Jane Doe', 33, '95000001', 'F');
        var p3 = new Person();
        
        // put persons in array to loop through it
        var persons = [p1, p2, p3];
        this.loop(persons);
    }
    
    this.loop = function(persons){
         persons.forEach(function(p) {
            
            var name = p.name;
            if(!name){
                 name = '<NO NAME>';
            }
            console.log('== '+ name +' ==')
            
            // Calculate imc
            var imc = p.calculateIMC();
            if(imc === -1 ) console.log('IMC: underweight');
            if(imc === 0 ) console.log('IMC: ideal weight');
            if(imc === 1) console.log('IMC: overweight');
            
            // Is adult?
            console.log('Is adult? '+ p.isAdult() + ', age: '+p.age);
                        
            // to String
            console.log('Person details:');
            console.log(p.toString());
        });
    }
}

/**
* Person class
*/
function Person(name, age, dni, sex, weight, height){
    
    this.createDNI = function(){
        return Math.floor(Math.random() * (99999999 - 1) + 1);
    }
    
    this.calculateIMC = function(){
        var result = this.weight / (Math.pow(this.height, 2))
        
        if(result < 20){
            
            return -1; //underweight
        }
        else if(result >= 20 && result <= 25){
            
            return 0;   // ideal weight
        }
        else if(result > 25) {
            
            return 1;   // overweight    
        }
        else 
        {
            
            return -1; // NaN
        }
        
    }
    
    this.isAdult = function(){
        
        return this.age >= 18;
    }
    
    this.checkSex = function(sex){
        
        return this.sex >= sex;
    }
    
    this.toString = function(){
     
        return JSON.stringify(this);
    }
    
    this.setName = function(newName){
        return newName || '';
    };
    
    this.setAge = function(newAge){
        return newAge || 0;
    };
    
    this.setDNI = function(newDNI){
        return newDNI || this.createDNI();
    };
    
    this.setSex = function(newSex){
        return newSex || this.checkSex(newSex);
    };
    
    this.setWeight = function(newWeight){
        return newWeight || 0;
    };
    
    this.setHeight = function(newHeight){
        return newHeight || 0;
    };
    
      
    // Constructor
    this.name = this.setName(name);
    this.age = this.setAge(age);
    this.dni = this.setDNI(dni);
    this.sex = this.setSex(sex);
    this.weight = this.setWeight(weight);
    this.height = this.setHeight(height);
    
}
