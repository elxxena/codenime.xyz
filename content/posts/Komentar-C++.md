---
title: Mengenal Komentar pada C++
date: "2022-12-30"
cover: https://i.postimg.cc/Qtk245Nn/1-Pengenalan-C-01.jpg
legacyID: "2022-12-30-komentar-cpp"
description: "Mengenal komentar, bagian terpenting dalam bahasa pemrograman"
published: true
tags:
  - c++
  - komentar
---

Dalam proses pengembangan sebuah program, tentunya kita akan disibukkan dengan penulisan kode-kode yang begitu banyak dan tampak rumit sehinnga akan sulit dipahami oleh orang lain. Untuk menangani masalah ini, sebagai seorang _Programmer_ kita sebaiknya menambahkan komentar untuk menjelaskan algoritma dan keterangan - keterangan yang diperlukan dalam program.

## Apa itu komentar?

Komentar adalah bagian dari kode program yang **tidak ikut dibaca** pada saat proses kompilasi.
Dengan kata lain, komentar tidak akan mempengaruhi jalannya sebuah program.

Didalam bahasa C++ sendiri kometar dibagi menjadi 2 jenis yaitu komentar satu baris dan komentar beberapa baris. Berikut adalah contoh komentar di bahasa C++

### Menggunakan tanda '//'

Tanda '//' digunakan untuk menuliskan komentar satu baris, komentar ini hanya tersedia untuk bahasa C++ saja, sedangkan untuk bahasa C tidak tersedia. Berikut adalah penggunaan Komentar satu baris.

```cpp
// Hai, ini adalah komentar satu baris
```

lalu bagaimana jika komentar di atas ditulis seperti ini

```cpp
// Hai, ini adalah
   komentar satu baris
```

jika kita _compile_ program yang diatas maka akan terjadi kesalahan, karena teks "Komentar satu baris" tidak akan dianggap sebagai komentar, melainkan akan dianggap sebagai tiga buah variabel yang tidak dikenal.

Perlu di ingat tanda '//' tidak dapat digunakan untuk komentar yang bersifat sisipan. Sebagai contoh, perhatikan kode dibawah ini

```cpp
int // Mendeklarasikan variabel berupa bilangan X;
```

Penulisan kode diatas juga akan menyebabkan _error_ karena `x;` akan dianggap sebagai komentar **bukan varibel.** Dengan demikian, seharusnya kita menuliskan komentar seperti berikut.

```cpp
int x; // Mendeklarasikan variabel berupa bilangan X;
```

### Menggunakan tanda '/* ... */'

Berbeda dengan tanda '//', tanda ini dapat digunakan untuk menuliskan komentar yang banyaknya satu baris atau lebih. Komentar ini dimulai dengan tanda '/*' sampai ditemukan tanda '*/'

```cpp
/* Ini adalah komentar yang banyaknya satu baris */
/* Ini adalah 
   komentar yang
   banyaknya lebih dari satu baris */
```

Dengan menggunakan tanda ini kita dapat menuliskan komentar kedalam sebuah kode progaram, seperti yang terlihat di kode berikut:

```cpp
int /* Membuat nama variable siswa */ siswa;
```

Namun perlu diperhatikan bahwa kita tidak dapat membuat komentar yang bersarang _(Nested Comment)_, misalnya

```cpp
/* ini adalah /* contoh komentar */ bersarang */
```

Apabila kita amati penulisan komentar di atas terlihat "Benar", namun apabila ditinjau dari sisi program, hal ini jelas "Salah".

Alasannya adalah karena tanda "*/" yang ditemukan pertama kali akan dianggap sebagai penutup tanda "/*" pertama.

Mungkin sekian dulu penjelasan mengenai **Komentar pada C++**, jika ada yang ingin ditanyakan silahkan bisa berkomentar, dan sampai jumpa di pembahasan selanjutnya 👋