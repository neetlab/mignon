import { default as parse, Element, domToReact, HTMLReactParserOptions } from "html-react-parser";
import Image from "next/image";
import { FC } from "react";
import styles from "./Prose.module.css";

const andThen = <T, U>(x: T | undefined, f: (x: T) => U): U | undefined =>
  x ? f(x) : undefined;


type ProseProps = {
  content: string;
}

export const Prose: FC<ProseProps> = (props) => {
  const { content } = props;

  const options: HTMLReactParserOptions = {
    replace: (domNode, index) => {
      if (domNode instanceof Element && domNode.name === "img") {
        const { src, alt } = domNode.attribs;

        const width = andThen(domNode.attribs.width, Number);
        const height = andThen(domNode.attribs.height, Number);

        // TODO: use custom loader
        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, 640px"
          />
        );
      }

      if (domNode instanceof Element && domNode.name.match(/^h[1-6]$/)) {
        const Heading = domNode.name as "h1";
        const id = `${domNode.name}-${index}`;

        return (
          <Heading>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {domToReact(domNode.children, options)}

            <a id={id} href={`#${id}`} className="anchor">
              #
            </a>
          </Heading>
        )
      }
    },
  };

  return <div className={styles.prose}>{parse(content, options)}</div>;
}
