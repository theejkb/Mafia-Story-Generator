import * as React from "react";
import PropTypes from "prop-types";
import Container from "../Container";

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary-600 backdrop-filter backdrop-blur bg-opacity-70 text-white">
      <Container>
        <ul className="py-12 text-center">
          <li>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold"></span> -{" "}
              <a
                href="https://elrond-mafia.com/"
                target={"_blank"}
                rel="noreferrer"
                className="hover:text-red-500 duration-200 transition-colors ease-in-out"
              >
                Elrond Mafia
              </a>{" "}
              Community App
            </p>
          </li>
          <li className="flex items-center justify-center">
            <img className="pr-1" width={25} height={25} src="/assets/img/egld-logo.svg" />
            Donation:
            <a
              href="https://explorer.elrond.com/accounts/erd1qh2m98dfkwyn4alps085a84x6pw04gar54fzna7c7frj7x9hpu3sd205vr"
              target={"_blank"}
              rel="noreferrer"
              className="pl-1 whitespace-nowrap text-ellipsis overflow-hidden hover:text-red-500 duration-200 transition-colors ease-in-out"
            >
              erd1qh2m98dfkwyn4alps085a84x6pw04gar54fzna7c7frj7x9hpu3sd205vr
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;
