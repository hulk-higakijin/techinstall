import prisma from '$lib/prisma';

const programmingLanguages = [
	'JavaScript',
	'TypeScript',
	'Python',
	'Java',
	'C#',
	'PHP',
	'C++',
	'C',
	'Ruby',
	'Go',
	'Swift',
	'Kotlin',
	'Rust',
	'Scala',
	'Dart',
	'Elixir',
	'Haskell',
	'R',
	'Next',
	'React',
	'Vue',
	'Angular',
	'Svelte',
	'SvelteKit',
	'Node',
	'Express',
	'Ruby on Rails',
	'Django',
	'Flask',
	'Spring',
	'Laravel',
	'ASP.NET',
	'React Native',
	'Flutter',
];

const formattedTags = programmingLanguages.map((langage) => ({
	name: langage,
	id: langage.toLowerCase().replace('.', '').replace(/\s/g, '')
}));

const createTags = async () => {
  await prisma.tag.createMany({
    data: formattedTags
  })
}

createTags()
