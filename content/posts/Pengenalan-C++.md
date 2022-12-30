---
title: Pengenalan C++
date: "2022-12-10"
cover: https://i.postimg.cc/Qtk245Nn/1-Pengenalan-C-01.jpg
legacyID: "2022-12-10-pengenalan-c++"
thumbnail: "💻"
description: "Pembahasan tentang sejarah lahirnya Bahasa Pemrograman C++"
published: true
tags:
  - c++
---

Halo, kali ini kita akan belajar mengenai bahasa pemrograman yang cukup populer yaitu bahasa C++, bagi kalian yang jurusan IT mungkin sudah tidak asing dengan bahasa ini. Bahasa C++ merupakan Bahasa yang wajib kita pelajari baik pada waktu SMK maupun Kuliah, dulu waktu SMK saya pun juga dituntut untuk belajar bahasa C++, mungkin karena jurusan saya yang berkaitan dengan Pemrograman, jadi yaa mau tidak mau harus belajar bahasa ini 😅.

Tapi sebenarnya tidak ada salahnya juga sih kita belajar Bahasa C++, malah menurut saya jika kita mendalami Bahasa C++ maka kita akan lebih mudah mempelajari Bahasa pemrograman yang lainnya seperti Python, Java, dan lain sebagainya.

## Apa itu C++ ?

C++ adalah Bahasa pemrograman yang digunakan oleh para praktisi atau ilmuwan untuk mengembangkan sebuah program (Aplikasi) berskala besar seperti Game, Program penelitian sains, dan lain sebagainya. Bahkan C++ juga dapat digunakan untuk mengembangkan aplikasi berbasis web, atau sering disebut dengan program CGI _(Common Gateway Interface)._

## Sejarah singkat C++

Pada tahun 1969 di laboratorium Bell AT&T di Muray Hill, New Jersey menggunakan Bahasa Assembly (Bahasa tingkat rendah) untuk mengembangkan sistem operasi [**UNIX**](https://id.wikipedia.org/wiki/Unix). Setelah UNIX berjalan, Ken Thompson, seorang pengembang sistem di laboratorium yang sama mengembangkan _compiler_ baru dengan nama Bahasa B. Karena Bahasa B masih bersifat _interpret_ dan lambat maka pada tahun 1971 sistem operasi UNIX kemudian ditulis ulang dengan menggunakan [Bahasa C](<https://id.wikipedia.org/wiki/C_(bahasa_pemrograman)>) yang dikembangkan oleh Dennis Ritchie, yang merupakan seorang pengembang di lab yang sama.

Sampai sekarang Bahasa C masih digunakan untuk pengembangan sistem operasi, seperti Linux dan Windows. Alasan itulah yang menjadikan Bahasa C terkenal dikalangan para _programmer_. Namun sayangnya Bahasa C masih tergolong bahasa yang susah dipelajari karena bersifat prosedural murni. Karena untuk membuat suatu objek kita harus melakukan banyak sekali penulisan kode.

![Bjarne Stroustrup!](https://www.engineering.columbia.edu/files/seas/styles/300x300/public/content/bio_profile_image/2020/27/stroustrup_500.png "Bjarne Stroustrup")

Nahhh.. untuk mengatasi masalah ini seorang dokter bernama [**Bjarne Stroustrup**](https://id.wikipedia.org/wiki/Bjarne_Stroustrup) di laboratorium yang sama menciptakan Bahasa baru yaitu **Bahasa C++**, yang merupakan Bahasa turunan dari Bahasa C. Keistimewaan dari Bahasa C++ adalah karena Bahasa ini mendukung pemrograman berarah objek atau dikenal dengan istilah _Object Oriented Programming_ (OOP).

## Hubungan antara Bahasa C dan C++

Dalam Bahasa C/C++, tanda ++ merupakan _increment_, yaitu proses penambahan nilai dengan 1, dengan demikian C++ berarti "C+1". Nilai 1 di sini melambangkan dukungan terhadap pemrograman berorientasi objek.

## Standar C++

![ISO!](https://emsregistrars.co.id/wp-content/uploads/2018/11/iso_org.jpg "ISO")

### C++98

Pada tahun 1998 Bahasa C++ mulai di standarisasi oleh ISO (Badan Standarisasi Internasional) dengan nama standar ISO/IEC 14882:1998 atau lebih dikenal dengan istilah C++98. Dalam standar ini ditambahkan fitur – fitur baru seperti _template, namespace, exception handling,_ dan lain – lain.

### C++03

Lalu pada tahun 2003, C++ Kembali mengalami standarisasi dengan nama standar ISO/IEC 14882:2003 atau C++03, di standar ini tidak ada penambahan fitur baru. Karena standar ini hanya melakukan perbaikan ‘Bug’ pada C++98 agar bisa lebih konsisten dan portabel.

### C++11

Terakhir pada tahun 2011 tepatnya pada tanggal 12 Agustus, C++ mengalami revisi dan standarisasi ulang dengan nama standar ISO/IEC 14882:2011 atau **C++11**, tapi banyak juga yang lebih senang menyebutnya dengan C++0x, distandar ini banyak fitur yang ditambahkan yaitu _multithreading, tuple, pengulangan for,_ dan lain – lain.

## Proses Pembentukan Program C++

Terdapat beberapa tahapan yang terjadi pada saat proses pembentukan program, dari kode menjadi file biner yang dapat dieksekusi. Dalam sistem operasi Windows file akan berekstensi `.exe` sedangkan di sistem operasi Linux file akan berekstensi `.o` Masing – masing tahapan dilakukan oleh program lain yang berbeda-beda, yaitu :

- C++ Preprosesor
- C++ Compiler
- Assembler
- Linker

![Pembentukan Progam C++!](https://w0rmd404.files.wordpress.com/2015/12/pembentukan-program-c.png "Pembentukan Program C++")

Setelah program (file `.exe` atau `.o`) terbentuk, file tersebut dapat dieksekusi atau dijalankan (Run), Program yang melakukan eksekusi ini disebut program **Loader**.

## Struktur Program C++

Untuk menjalankan sebuah program pastinya kita harus menulis struktur kodenya terlebih dahulu, setelah itu baru kita menjalankanya _(Run)_, di bahasa C++ juga memiliki struktur kode untuk menjalankan sebuah program, berikut adalah struktur C++

```cpp
// Struktur program bahasa C++

#include <iostream>
using namespace std;

int main(){

    // Statement yang akan dijalankan

    return 0;
}
```

> **Penjelasan Kode Diatas**
>
> `<iostream>` : File header yang digunakan untuk proses _input/output._
>
> `using namespace std;` : Statement ini menunjukkan bahwa kita menggunakan Bahasa C++ standar di dalam kode yang kita buat.
>
> `int main (){...}` : Statement ini digunakan untuk menuliskan fungsi utama.

Jika kita lihat sekilas memang strukturnya hampir sama dengan bahasa C 🤔, itu karena bahasa C++ merupakan bahasa turunan dari bahasa C, jadi perbedaannya tidak jauh dari sebelumnya.

Berikut adalah struktur program bahasa C

```c
// Struktur program bahasa C

#include <stdio.h>

int main(void){

  // Statement yang akan dijalankan

  return 0;

}
```

Mungkin sekian dulu penjelasan mengenai **Pengenalan C++**, jika ada yang ingin ditanyakan silahkan bisa berkomentar, dan sampai jumpa di pembahasan selanjutnya 👋


