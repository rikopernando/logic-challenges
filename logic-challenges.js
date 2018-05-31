// Soal Pertama => Logic Challenge - Bandingkan Angka

var bandingkanAngka = (angka1, angka2) => {
	if (angka2 > angka1) {
		return true  
	}else if (angka1 > angka2) {
		return false
	}else{
		return -1
	}
}

// TEST CASES
console.log(`Soal Pertama => Logic Challenge - Bandingkan Angka`)
console.log(bandingkanAngka(5, 8)) // true
console.log(bandingkanAngka(5, 3)) // false
console.log(bandingkanAngka(4, 4)) // -1
console.log(bandingkanAngka(3, 3)) // -1
console.log(bandingkanAngka(17, 2)) // false

console.log()


// Soal Kedua => Logic Challenge - Balik Kata

var balikKata = (kata) => {

	var newKata = ""
	for (var i = kata.length -1; i >= 0; i--) {
		newKata += kata[i]
	}
	return newKata

}

// TEST CASES
console.log(`Soal Kedua => Logic Challenge - Balik Kata`)
console.log(balikKata('Hello World and Coders'))// sredoC dna dlroW olleH
console.log(balikKata('John Doe')) // eoD nhoJ
console.log(balikKata('I am a bookworm')) // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')) // ybboh ym si gnidoC
console.log(balikKata('Super')) // repuS
console.log()


// Soal Ketiga => Logic Challenge - Konversi Menit

var konversiMenit = (menit) => {
	
	var modulus = menit % 60
	if (modulus == 0) {
		var waktu = parseInt(menit / 60) + ":00"
	}else{
		if (modulus > 9) {
			var waktu = parseInt(menit / 60) + ":" + modulus
		}else{
			var waktu = parseInt(menit / 60) + ":0" + modulus
		}
		
	}
	return waktu
}

// TEST CASES
console.log(`Soal Ketiga => Logic Challenge - Konversi Menit`)
console.log(konversiMenit(63))// 1:03
console.log(konversiMenit(124))// 2:04
console.log(konversiMenit(53))// 0:53
console.log(konversiMenit(88))// 1:28
console.log(konversiMenit(120))// 2:00
console.log()

//Logic Challenge - X dan O
var xo = (str) => {

	var o = 0
	var x = 0
	for (var i = str.length - 1; i >= 0; i--) {
		str[i] == "x" ? x += 1 : o += 1 
	}
	return	x == o ? true : false
}

// TEST CASES
console.log(`Logic Challenge - X dan O`)
console.log(xo('xoxoxo'))// true
console.log(xo('oxooxo'))// false
console.log(xo('oxo'))// false
console.log(xo('xxxooo'))// true
console.log(xo('xoxooxxo'))// true

