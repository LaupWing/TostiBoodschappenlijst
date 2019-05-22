
if(document.querySelector){
    if(document.querySelector('form')){
        document.querySelector('form').action = '/javascriptYES'
    }
}else{
    // Oldest function
    const form = document.getElementsByTagName('form')
    // Er is toch maar 1 form beschikbaar hier
    form[0].action = '/javascriptYES'
}
