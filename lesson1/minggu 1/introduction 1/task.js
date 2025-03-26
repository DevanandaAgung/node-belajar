const biodata = {
  name: "bagus",
  age: 21,
  hobbies: ["mancing", "coding"],
  isMarried: "belum",
  interestInCoding: true,
  schoolList: [
    {
      name: "SD Negeri 1 Ambarawa",
      yearIn: 2000,
      yearOut: 2006,
      major: null
    },
    {
      name: "SMP Negeri 1 Salatiga",
      yearIn: 2007,
      yearOut: 2010,
      major: null
    },
    {
      name: "SMA Negeri 1 Semarang",
      yearIn: 2011,
      yearOut: 2014,
      major: "IPA" // perhatikan penggunaan string untuk jurusan
    }
  ],
  skillName: [
    {
      html: "beginner",
      css: "advance",
      javascript: "expert"
    }]
};

// Menampilkan data biodata secara umum
const output = `
name: ${biodata.name}
age: ${biodata.age}
hobbies: ${biodata.hobbies.join(", ")}
isMarried: ${biodata.isMarried}
interestInCoding: ${
  biodata.interestInCoding
  ? "tertarik pada coding"
  : "tidak tertarik pada coding"
}
`;
console.log(output);

// Menampilkan data schoolList
biodata.schoolList.forEach((school, index) => {
  console.log(`School ${index + 1}:`);
  console.log(`  Name: ${school.name}`);
  console.log(`  Year In: ${school.yearIn}`);
  console.log(`  Year Out: ${school.yearOut}`);
  console.log(`  Major: ${school.major}`);
  console.log("--------------");
});

// Menampilkan data skillName
biodata.skillName.forEach((skill, index) => {
  console.log(`Skill ${index + 1}:`);
  console.log(`  HTML: ${skill.html}`);
  console.log(`  CSS: ${skill.css}`);
  console.log(`  JavaScript: ${skill.javascript}`);
})
