let zuirUg = ['Хүн','хичээвэл','заяа','дагана','Эрхийг','сурахаар','бэрхийг','хий'];
    // alham1:  zuirUg massiviiin elementiin toog hewle(console.log)
    // alham2: zuirUg massiviin svvliin elementiig ustaga
console.log("алхам1 урт нь "+zuirUg.length);
zuirUg.pop();
console.log("alham2 "+zuirUg);
zuirUg.shift();
console.log("alham3 урт="+zuirUg.length+", "+zuirUg);
zuirUg.push('Сур');
console.log("alham4 Сур үгийг нэмлээ "+zuirUg);
zuirUg.splice(2,1, 'хичээнэ');
console.log("alham5  "+zuirUg);
zuirUg = ['Хүн','хичээвэл','заяа','дагана','Эрхийг','сурахаар','бэрхийг','хий'];
zuirUg.shift()
console.log('alham6 '+zuirUg);
zuirUg.unshift('Эзэн');
console.log('alham7 '+zuirUg);
zuirUg.splice(4,4,'монгол','ардын','зүйр','цэцэн','үг');
console.log('alham8 '+zuirUg);
zuirUg.join('-');
console.log('alham9 '+zuirUg);