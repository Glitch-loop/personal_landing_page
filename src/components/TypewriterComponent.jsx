import Typewriter from 'typewriter-effect';
import words from '../utils/words';
import colors from "../utils/colors";

const TypewriterComponent = () => {
  console.log(words)
  console.log("Hello")
  return (
    <div className="">
      <Typewriter
        options={{
          loop: true,
          delay: 100,
          cursor: "<"
        }}
        onInit={(typewriter) => {
          words.forEach((word, index) => {
            let indexColor = index
            if (indexColor > colors.length - 1) {
              indexColor = indexColor % colors.length
            } 

            typewriter
              .typeString(`<span style="color: ${colors[indexColor]};">${word}</span>`)
              .pauseFor(2000)
              .deleteAll();
          });
          typewriter.start();
        }}
      />
      
    </div>
  );
};

export default TypewriterComponent;
