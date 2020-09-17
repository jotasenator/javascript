lista=[]
function a(level,sep){
	function b(...mensajes){
		for(let i of mensajes){
			if(i.level>=level){
				lista.push(i.texto)
			}


		}
		
		return lista.join(sep)
	}
	return b({level:12,texto:'bizz'},{level:20,texto:'buzz'},{level:30,texto:'fizz'},{level:31,texto:'fuzz'})
}

console.log(a(15,';'))

