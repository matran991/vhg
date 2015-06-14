datatk = ['15|1|Admin'];
for(var j = 0; j < datatk.length; j++){
$('.tenthank[data="'+datatk[j].split('|')[0]+'"]').each(function(){
$(this).closest('.khungthank').show();$(this).append('<a href="/u'+datatk[j].split('|')[1]+'">'+datatk[j].split('|')[2]+'</a>')
})
}
