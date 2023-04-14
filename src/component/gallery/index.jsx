import {
  AvengerSpider,
  book01,
  book02,
  book03,
  book04,
  book1,
  book2,
  book3,
  book4,
  spider1,
  spider2,
  spider3,
  spider4,
  spider5,
  spider6,
  spider7,
  spider8,
  spiderman1,
  spiderman2,
  spiderman3,
  spiderman4,
} from "../../assets";
import RecommendedBookCard from "./RecommendedBookCard";
import RelatedBooksCard from "./RelatedBooksCard";
import ReleasedComicsCard from "./ReleasedComicsCard";

AvengerSpider;

const Gallery = () => {
  const releasedComics = [
    {
      id: 1,
      image: spiderman1,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 2,
      image: spiderman2,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 3,
      image: spiderman3,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 4,
      image: spiderman4,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },
  ];

  const relatedBooks = [
    {
      id: 1,
      image: book01,
      title: "Invincible Iron Man",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 2,
      image: book02,
      title: "Captain Marvel",
      description: "By Marvel Universe",
      price: "$84.00",
    },

    {
      id: 3,
      image: book03,
      title: "Captain Marvel",
      description: "By Marvel Universe",
      price: "$52.00",
    },

    {
      id: 4,
      image: book04,
      title: "The Mighty Thor",
      description: "By Marvel Universe",
      price: "$37.00",
    },
  ];

  const recommendBooks = [
    {
      id: 1,
      image: spider1,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 2,
      image: spider2,
      title: "Amazing Spider-Man",
      description: "By Marvel Universe",
      price: "$84.00",
    },

    {
      id: 3,
      image: spider3,
      title: "Amazing Fantasy",
      description: "By Marvel Universe",
      price: "$52.00",
    },

    {
      id: 4,
      image: spider4,
      title: "Heroes Return",
      description: "By Marvel Universe",
      price: "$37.00",
    },

    {
      id: 5,
      image: spider5,
      title: "Spiderman Young Forever",
      description: "By Marvel Universe",
      price: "$49.00",
    },

    {
      id: 6,
      image: spider6,
      title: "Amazing Spider-Man",
      description: "By Marvel Universe",
      price: "$84.00",
    },

    {
      id: 3,
      image: spider7,
      title: "The Humanity Agenda",
      description: "By Marvel Universe",
      price: "$52.00",
    },

    {
      id: 4,
      image: spider8,
      title: "The Spiderman World",
      description: "By Marvel Universe",
      price: "$37.00",
    },
  ];

  return (
    <>
      <div className="w-4/5  ml-40 ">
        <img
          src={AvengerSpider}
          alt="AvengerSpider"
          className="w-[1000px] ml-32 "
        />
      </div>

      <div className="grid grid-col1 lg:grid-cols-4 md:grid-cols-3 mx-12  ">
        {/* Rendering ReleasedComics Array */}
        {releasedComics.map((releaseComic) => (
          <ReleasedComicsCard
            key={releaseComic.id}
            title={releaseComic.title}
            image={releaseComic.image}
            description={releaseComic.description}
            price={releaseComic.price}
          />
        ))}

        {/* Rendering Related Books */}
        {relatedBooks.map((relatedBook) => (
          <RelatedBooksCard
            key={relatedBook.id}
            image={relatedBook.image}
            title={relatedBook.title}
            description={relatedBook.description}
            price={relatedBook.price}
          />
        ))}

        {/* Rendering Recommend Book */}

        {recommendBooks.map((recommendBook) => (
          <RecommendedBookCard
            key={recommendBook.id}
            image={recommendBook.image}
            title={recommendBook.title}
            description={recommendBook.description}
            price={recommendBook.price}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
