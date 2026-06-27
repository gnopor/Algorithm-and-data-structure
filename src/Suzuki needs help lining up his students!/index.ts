export function lineupStudents(students: string): string[] {
  const names: string[] = students.split(" ");
  names.sort((a, b) => b.length - a.length);
  const result: string[] = [];

  let tmp: string[] = [names[0]];

  for (let i = 1; i < names.length; i++) {
    const name = names[i];

    if (tmp[0].length == name.length) {
      tmp.push(name);
    } else {
      result.push(...tmp.sort().reverse());
      tmp = [name];
    }

    if (i == names.length - 1 && tmp.length != 0) {
      result.push(...tmp.sort().reverse());
    }
  }

  return result;
}

const params = [
  {
    names:
      "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi",
  },
  {
    names:
      "Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki",
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${lineupStudents(p.names)}\n`,
  );
}
