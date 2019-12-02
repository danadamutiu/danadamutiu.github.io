document.getElementById("id_version").innerHTML = "Version: 2019.12.02.1";

window.addEventListener("touchstart", touch_start_uab);
window.addEventListener("touchmove", touch_move_uab);
window.addEventListener("touchend", touch_end_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var last_position = [];


function get_random_color()
{
	var caractere = "0123456789ABCDEF";
	var sir = "#";
	for(var i = 0; i < 6; i++)
		culoare += caractere[Math.floor(Math.random() * 16)]; //facem trunchiere sa avem nr intregi(math.floor) ca sa prindem si 0 si 15 (pozitia din caractere) 
															  //si *16 ca sa prindem si F(pozitia 15)
}


function touch_start_uab(p) 
{
	var t = p.changedTouches; //lista degetelor care incep apasarea pe ecran
	for (var i = 0; i < t.length; i++)
	{
		var touch_info = {};
		touch_info.x = t[i].pageX;
		touch_info.y = t[i].pageY;
		touch_info.id = t[i].identifier;
		touch_info.color = get_random_color();
		
		context.beginPath();
		context.arc(t[i].pageX, t[i].pageY, 10, 0, 2 * Math.PI);
		context.strokeStyle = touch_info.color;
		context.fillStryle = touch_info.color;
		context.lineWidth = 1;
		context.fill();
		context.stroke();
		
		last_position.push(touch_info); // am adaugat structura noastra in vector
			
	}
}


function touch_move_uab(p) 
{
	var t = p.changedTouches; //lista degetelor care se misca p ecran
	for (var i = 0; i < t.length; i++)
	{
		var index_t = -1;
		for (var j = 0; j < last_position.length; j++)
			if (last_position[j].id == t[i].identifier)
			{
				index_t = j;
				break;
			}
			
		context.beginPath();
		context.moveTo(last_position[index_t].x, last_position[index_t].y);
		context.lineTo(t[i].pageX, t[i].pageY);
		context.strokeStyle = last_position[index_t].color;
		context.fillStryle = last_position[index_t].color;
		context.lineWidth = 20;
		context.fill();
		context.stroke();
		
	}
}


function touch_end_uab(p)  
{
	var t = p.changedTouches; //lista degetelor care s`au ridicat dp ecran
	for (var i = 0; i < t.length; i++)
	{
		var index_t = -1;
		for (var j = 0; j < last_position.length; j++)
			if (last_position[j].id == t[i].identifier)
			{
				index_t = j;
				break;
			}
			last_position.splice(index_t, 1);
	}		
}