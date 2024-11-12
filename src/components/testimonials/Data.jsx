// Helper function to import all files from a folder
const importAll = (requireContext) => {
  return requireContext.keys().reduce((images, file) => {
    const fileName = file.replace('./', ''); // Get file name without './'
    images[fileName] = requireContext(file); // Add to the images object
    return images;
  }, {});
};

// Import all images from the assets folder
const contentImages = importAll(require.context('../../assets/testimonial', false, /\.(webp|jpg|png)$/));


export const Data = [
  {
    id: 1,
    image: contentImages['testimonial1.webp'],
    title: "Maria | SkinDough",
    description:
      "Ung video nyo po sa SKINdough, kung pwede daw po i-upload sa page ☺️ Hehe maganda nga po sya actually himdi na namin napansin ung lightning. Bumagay kasi hehe ☺️ salamat po 💚💚💚",
  },
  {
    id: 2,
    image: contentImages['testimonial.webp'],
    title: "Maria | Prive Beaute",
    description:
      "Saw it (video content) yesterday po. Super love it.",
  },
  {
    id: 3,
    image: contentImages['testimonial2.png'],
    title: "Joan | Civago ",
    description:
      "Woow, it's okay na po. Thank you so much for your detailed content. You can post it po",
  },
  {
    id: 4,
    image: contentImages['testimonial.webp'],
    title: "Sandra | Skintec",
    description:
      "Thank you, Mikks! It's so nice working with you :D",
  },
  {
    id: 5,
    image: contentImages['testimonial3.png'],
    title: "Yobe DMS | Agency",
    description:
      "Definitely a job well done mikks, it's truly an honor to have you as our very talented and creative creator for producing such quality content for our clients. Looking forward to working with you more for future projects!",
  },
  {
    id: 6,
    image: contentImages['testimonial4.png'],
    title: "Adrian | Yestera",
    description:
      "She’s excellent at what she does and always delivers with excellence. Extra points for the effort!",
  },
];
