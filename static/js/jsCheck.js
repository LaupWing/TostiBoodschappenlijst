
if(document.querySelector){
    if(document.querySelector('form')){
        document.querySelector('form').action = '/javascriptYES'
    }
}else{
    // Oldest function
    document.getElementsByTagName('form').action = '/javascriptYES'
}
