// Helper function to import all files from a folder
const importAll = (requireContext) => {
  return requireContext.keys().reduce((images, file) => {
    const fileName = file.replace('./', ''); // Get file name without './'
    images[fileName] = requireContext(file); // Add to the images object
    return images;
  }, {});
};

// Import all images from the assets folder
const contentImages = importAll(require.context('../../assets/portfolio', false, /\.(webp|jpg|png)$/));


export const projectsData = [

  // Contents
  {
    id: 1,
    image: contentImages['content1.webp'],
    title: "UGC | Athena",
    category: "contents",
    text: "Product showcase",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 1",
    alt: "Mikks' Sample Content 1",
  },
  {
    id: 2,
    image: contentImages['content2.webp'],
    title: "UGC | Bath & Body Works",
    category: "contents",
    text: "Product showcase",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 2",
    alt: "Mikks' Sample Content 2",
  },
  {
    id: 3,
    image: contentImages['content3.webp'],
    title: "UGC | Careline",
    category: "contents",
    text: "Product showcase and usage",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 3",
    alt: "Mikks' Sample Content 3",
  },
  {
    id: 4,
    image: contentImages['content4.webp'],
    title: "Event | SM Cinema",
    category: "contents",
    text: "Experience and call to action",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 4",
    alt: "Mikks' Sample Content 4",
  },
  {
    id: 5,
    image: contentImages['content5.webp'],
    title: "Promotion | Paping's Staycation",
    category: "contents",
    text: "Experience and call to action",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 5",
    alt: "Mikks' Sample Content 5",
  },
  {
    id: 6,
    image: contentImages['content6.webp'],
    title: "Promotion | Prive Beaute Aesthetics",
    category: "contents",
    text: "Experience",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 6",
    alt: "Mikks' Sample Content 6",
  },
  {
    id: 7,
    image: contentImages['content7.webp'],
    title: "Event | Beaucon Manila 2024",
    category: "contents",
    text: "Event Experience",
    link: "https://www.instagram.com/reel/C_NSlE6P8Tv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 7",
    alt: "Mikks' Sample Content 7",
  },
  {
    id: 8,
    image: contentImages['content8.png'],
    title: "Event | Huawei Tech with Love",
    category: "contents",
    text: "Event Experience",
    link: "https://www.instagram.com/reel/DCOpQgUSAas/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

    arialabel: "View Mikks' Sample Content 8",
    alt: "Mikks' Sample Content 8",
  },
  {
    id: 9,
    image: contentImages['content9.png'],
    title: "Event | Fairy Skin on Mega Beautycon",
    category: "contents",
    text: "Event Experience",
    link: "https://www.instagram.com/reel/DCOpQgUSAas/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    arialabel: "View Mikks' Sample Content 9",
    alt: "Mikks' Sample Content 9",
  },

  //  Presentations
  {
    id: "A1",
    image: contentImages['Ppt1.webp'],
    title: "Region 1 Template",
    category: "presentations",
    text: "Editable morph presentation using MS PPT",
    link: "https://www.tiktok.com/@by_mikks/video/7351830281038335237?is_from_webapp=1&sender_device=pc&web_id=7436314431984354824",
    arialabel: "View Mikks' Sample Presentation 1",
    alt: "Mikks' Sample Presentation 1",
  },
  {
    id: "A2",
    image: contentImages['Ppt2.webp'],
    title: "El Filibusterismo Template",
    category: "presentations",
    text: "Editable morph presentation using MS PPT",
    link: "https://www.tiktok.com/@by_mikks/video/7356148208050965765?is_from_webapp=1&sender_device=pc&web_id=7436314431984354824",
    arialabel: "View Mikks' Sample Presentation 2",
    alt: "Mikks' Sample Presentation 2",
  },
  {
    id: "A3",
    image: contentImages['Ppt5.webp'],
    title: "Brand Introduction",
    category: "presentations",
    text: "Morph presentation using MS PPT",
    link: "https://www.tiktok.com/@by_mikks/video/7344354117202103557",
    arialabel: "View Mikks' Sample Presentation 3",
    alt: "Mikks' Sample Presentation 3",
  },
  {
    id: "A4",
    image: contentImages['Ppt4.webp'],
    title: "Earthquake Preparedness Template",
    category: "presentations",
    text: "Morph presentation using MS PPT",
    link: "https://www.tiktok.com/@by_mikks/video/7361527268641885446?is_from_webapp=1&sender_device=pc&web_id=7436314431984354824",
    arialabel: "View Mikks' Sample Presentation 4",
    alt: "Mikks' Sample Presentation 4",
  },
  {
    id: "A5",
    image: contentImages['Ppt3.webp'],
    title: "Noli Me Tangere Template",
    category: "presentations",
    text: "Editable morph presentation using MS PPT",
    link: "https://www.tiktok.com/@by_mikks/video/7358053971560385797?is_from_webapp=1&sender_device=pc&web_id=7436314431984354824",
    arialabel: "View Mikks' Sample Presentation 5",
    alt: "Mikks' Sample Presentation 5",
  },

  // Photography
  {
    id: "B1",
    image: contentImages['pic1.jpg'],
    category: "photography",
    text: "Product photography",
    arialabel: "View Mikks' Sample Photography 1",
    alt: "Mikks' Sample Photography 1",
  },
  {
    id: "B3",
    image: contentImages['pic3.jpg'],
    category: "photography",
    text: "Product photography",
    arialabel: "View Mikks' Sample Photography 3",
    alt: "Mikks' Sample Photography 3",
  },
  {
    id: "B4",
    image: contentImages['pic5.jpg'],
    category: "photography",
    text: "UGC photography",
    arialabel: "View Mikks' Sample Photography 4",
    alt: "Mikks' Sample Photography 4",
  },
  {
    id: "B5",
    image: contentImages['pic6.jpg'],
    category: "photography",
    text: "UGC photography",
    arialabel: "View Mikks' Sample Photography 5",
    alt: "Mikks' Sample Photography 5",
  },
  {
    id: "B6",
    image: contentImages['pic7.jpg'],
    category: "photography",
    text: "UGC photography",
    arialabel: "View Mikks' Sample Photography 6",
    alt: "Mikks' Sample Photography 6",
  },
  {
    id: "B7",
    image: contentImages['pic8.jpg'],
    category: "photography",
    text: "Product Photography",
    arialabel: "View Mikks' Sample Photography 7",
    alt: "Mikks' Sample Photography 7",
  },
  {
    id: "B8",
    image: contentImages['pic9.jpg'],
    category: "photography",
    text: "Product Photography",
    arialabel: "View Mikks' Sample Photography 8",
    alt: "Mikks' Sample Photography 8",
  },
  {
    id: "B9",
    image: contentImages['pic2.jpg'],
    category: "photography",
    text: "UGC Photography",
    arialabel: "View Mikks' Sample Photography 9",
    alt: "Mikks' Sample Photography 9",
  },


  // UI
  {
    id: "C1",
    image: contentImages['Ui1.png'],
    title: "Mobile App UI",
    category: "ui",
    text: "UI for a sample application",
    link: "https://www.figma.com/proto/2S3kNW2D4y4fjdyuB2NKQj/Attendance-Management-System-(COSC-65)?node-id=9-44&node-type=canvas&t=fTM7u3xbsYPiTNr5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    arialabel: "View Mikks' Sample UI 1",
    alt: "Mikks' Sample UI 1",
  },

  // Graphic Designs
  {
    id: "D1",
    image: contentImages['Gd1.png'],
    title: "Poster",
    category: "graphic designs",
    text: "Mayon Volcano Poster",
    link: "https://www.canva.com/design/DAGWAz52UUo/wi2MKMa9b7xmSx1xTu9q1Q/view?utm_content=DAGWAz52UUo&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    arialabel: "View Mikks' Sample Graphic Design 1",
    alt: "Mikks' Sample Graphic Design 1",
  },
  {
    id: "D2",
    image: contentImages['Gd2.png'],
    title: "Zine",
    category: "graphic designs",
    text: "Zine with short poems",
    link: "https://www.canva.com/design/DAGJBna738E/cZJMRPR6378N5ygtKrht0Q/view?utm_content=DAGJBna738E&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    arialabel: "View Mikks' Sample Graphic Design 2",
    alt: "Mikks' Sample Graphic Design 2",
  },
  {
    id: "D3",
    image: contentImages['Gd3.png'],
    title: "Meme Poster",
    category: "graphic designs",
    text: "CS student meme poster",
    link: "https://www.canva.com/design/DAGWRRp8IY4/tvxclj9UwAwpuLAmtOPUig/view?utm_content=DAGWRRp8IY4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    arialabel: "View Mikks' Sample Graphic Design 3",
    alt: "Mikks' Sample Graphic Design 3",
  },
  {
    id: "D4",
    image: contentImages['Gd4.png'],
    title: "Portfolio",
    category: "graphic designs",
    text: "Museum visit portolfio",
    link: "https://www.canva.com/design/DAFobHrIS58/RVpejMJhskXgN4yxhaBhaA/view?utm_content=DAFobHrIS58&utm_campaign=designshare&utm_medium=link&utm_source=editor",

    arialabel: "View Mikks' Sample Graphic Design 4",
    alt: "Mikks' Sample Graphic Design 4",
  },
  {
    id: "D5",
    image: contentImages['Gd5.png'],
    title: "Meme Poster",
    category: "graphic designs",
    text: "CS student meme poster",
    link: "https://www.canva.com/design/DAGWRf-WqIQ/_WEK9Cxo3TkVq3RF4tdBbw/view?utm_content=DAGWRf-WqIQ&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    arialabel: "View Mikks' Sample Graphic Design 5",
    alt: "Mikks' Sample Graphic Design 5",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "photography",
  },
  {
    name: "contents",
  },
  {
    name: "presentations",
  },
  {
    name: "graphic designs",
  },
  {
    name: "ui",
  },
];
