import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardDeatil, CardImageHolder, CardLink, CardMain } from "./styled";
import { Heading } from "../../layouts/Share";

const Card = ({ country }) => {
  const { name, population, region, capital, flag, alpha3Code } = country;

  return (
    <Link href={`country/${alpha3Code}`} passHref>
      <CardLink>
        <CardImageHolder>
          <Image
            alt="country flag"
            src={flag}
            layout="fill"
            objectFit="cover"
          />
        </CardImageHolder>

        <CardMain>
          <Heading>{name}</Heading>
          <CardDeatil>
            <span>Population:</span>
            <span>{population}</span>
          </CardDeatil>

          <CardDeatil>
            <span>Region:</span>
            <span>{region}</span>
          </CardDeatil>

          <CardDeatil>
            <span>Capital:</span>
            <span>{capital}</span>
          </CardDeatil>
        </CardMain>
      </CardLink>
    </Link>
  );
};

export default Card;
