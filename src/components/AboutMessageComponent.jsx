import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const timmingHighlightText = {
  duration: 1,
  delay: 10
}

function AboutMessageComponent() {
  return (
    <div className="flex flex-col text-3xl">
      <motion.div 
        className="flex flex-col text-3xl"
        initial={{ color: "rgba(217, 217, 217, 1)" }}
        whileInView={{ color: "rgba(217, 217, 217, 0.1)" }}
        transition={{duration: 2, delay: 10}}
        viewport={{once: true}}
        // className="fadeIn"
        
      >
        <article 
          className="flex flex-row w-3/5 text-wrap">
          <span>
              Back in 2018,
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
                > 
                I had the opportunity 
              </motion.span>
              to put my creativity into code, creating my first program 
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
                > 
                to help with small day-to-day problems. 
              </motion.span>
              From that moment until now, 
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
                > 
                I knew 
              </motion.span>
              that 
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
                > my vocation is 
              </motion.span>
              in 
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
              > 
                the development of software systems. 
              </motion.span >
          </span>
        </article>
        <article className="mt-5 flex flex-row w-3/5 text-wrap">
          <span>
            <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
              >
              With 1 year of experience 
            </motion.span>
            developing applications to add value to people, I can say that I have had the satisfaction 
            <motion.span 
                initial={{ color: "rgba(217, 217, 217, 1)" }}
                whileInView={{ color: "rgb(230, 126, 34, 1)"}}
                transition={timmingHighlightText}
                className="mx-1"
              >
              of being able to see the impact of my work
            </motion.span>
            motivating me every day to improve and be a better engineer. 
            <motion.span 
              initial={{ color: "rgba(217, 217, 217, 1)" }}
              whileInView={{ color: "rgb(230, 126, 34, 1)"}}
              transition={timmingHighlightText}
              className="mx-1"
              >
              I am an engineer looking for new problems to solve and new opportunities to grow.
            </motion.span>
          </span>
        </article>
      </motion.div>
      <article className="mt-10 flex flex-col w-3/5 text-wrap">
        <span className="">
          Every problem is an opportunity in disguise. 
        </span>
        <span className="italic mt-2">-Jhon Adams</span>
      </article>
    </div>
    
  )
}

export default AboutMessageComponent