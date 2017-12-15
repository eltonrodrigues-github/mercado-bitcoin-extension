var mbexUtil = (function(){
    console.log('util.js loaded');
    function query(selector){
        return document.querySelector(selector);
    }

    function getFloatValue(input){
        return parseFloat(input.value.replace(',', '.'));
    }

    function setFloatValue(input, value, fireEvent) {
        input.value = value.toFixed(8).replace('.', ',');
        if(fireEvent)
            input.dispatchEvent(new Event(fireEvent));
    }

    return {
        query: query,
        getFloatValue: getFloatValue,
        setFloatValue: setFloatValue
    };
})()