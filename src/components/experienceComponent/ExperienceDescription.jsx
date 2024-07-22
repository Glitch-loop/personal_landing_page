import { useRef } from "react"
import ExperienceTextItem from "./ExperienceTextItem"
import ExperienceListItem from "./ExperienceListItem"
import ExperienceLinkItem from "./ExperienceLinkItem"
import { formatOfExperience } from "../../utils/formatOfExperience"

function ExperienceDescription({experience}) {  
  if ("moreInformation" in experience) {
    // Validating that all the fields are in the json
    for (const key in formatOfExperience["moreInformation"]) {
      if (!(key in experience["moreInformation"])) {
        // If there is not the information in the experience, then add it.
        // The information will be the template by default.
        console.log(formatOfExperience["moreInformation"][key])
        experience["moreInformation"][key] = formatOfExperience["moreInformation"][key]
  
      }      
    }
  }

  return ( 
    <>
      { !("moreInformation" in experience) ?
        <div className={`
          flex flex-col text-sm 
          items-center justify-center
          w-11/12
          text-wrap
          flex-wrap
          mx-3 md:mx-10

        `}>
          <span>Something was wrong!!! </span>
        </div>
        :
        <div className={`
            flex flex-col text-sm 
            cursor-default
            items-start justify-start 
            w-11/12
            text-wrap
            flex-wrap
            mx-3 md:mx-5

          `}>
          {/* Title */}
          <span className="flex flex-row font-bold text-lg md:text-2xl">
            {
              experience.moreInformation.title === '' ? 
              experience.data.label : 
              experience.moreInformation.title
            }
          </span>
          {/* Photo */}
          { experience.moreInformation.linkPhoto !== '' &&
            <div className="flex flex-row w-full items-center justify-center">
              <img 
                className="rounded-lg my-3 flex"
                src={experience.moreInformation.linkPhoto} 
                alt="Descriptive image of the project."/>
            </div>
          }
          {/* Role/Position */}
          { experience.moreInformation.role !== '' &&
            <ExperienceTextItem 
              nameItem={"Role/Position"}
              information={experience.moreInformation.role}
            />
          }
          {/* Duration */}
          { experience.moreInformation.duration !== '' &&
            <ExperienceTextItem 
              nameItem={"Duration"}
              information={experience.moreInformation.duration}
            />
          }
          {/* Team Size */}
          { experience.moreInformation.teamSize !== '' &&
            <ExperienceTextItem 
              nameItem={"Team size"}
              information={experience.moreInformation.teamSize}
            />
          }
          {/* Technologies */}
          { (experience.moreInformation.technologies[0] !== '') &&
            <ExperienceListItem 
              nameItem={"Technologies"}
              message={""}
              items={experience.moreInformation.technologies}
              typeOfList={0}
            />
          }
          {/* Link to application */}
          { (experience.moreInformation.linkToApplication !== ''
            && experience.moreInformation.linkDescription !== '') &&
            <ExperienceLinkItem
              nameItem={"Direct link"}
              message={experience.moreInformation.linkDescription}
              link={experience.moreInformation.linkToApplication}
            />
          }
          {/* Description */}
          { experience.moreInformation.description !== '' &&
            <ExperienceTextItem 
              nameItem={"Description"}
              information={experience.moreInformation.description}
            />
          }
          {/* Responsibilities */}
          { (experience.moreInformation.responsabilities[0] !== ''
            || experience.moreInformation.messageForResponsabilities !== ''
            ) &&
            <ExperienceListItem 
              nameItem={"Responsabilities"}
              message={experience.moreInformation.messageForResponsabilities}
              items={experience.moreInformation.responsabilities}
              typeOfList={0}
            />
          }
          {/* Principal Challenge */}
          { (experience.moreInformation.principalChallenges[0] !== ''
            || experience.moreInformation.messageForChallenges !== ''
            ) &&
            <ExperienceListItem 
              nameItem={"Principal challenges"}
              message={experience.moreInformation.messageForChallenges}
              items={experience.moreInformation.principalChallenges}
              typeOfList={0}
            />
          }

          {/* Learning */}
          { (experience.moreInformation.learnings[0] !== ''
            || experience.moreInformation.messageForLearning !== ''
            ) &&
            <ExperienceListItem 
              nameItem={"Learnings"}
              message={experience.moreInformation.messageForLearning}
              items={experience.moreInformation.learnings}
              typeOfList={0}
            />
          }

          {/* Impact */}
          { (experience.moreInformation.impacts[0] !== ''
            || experience.moreInformation.messageForImpacts !== ''
            ) &&
            <ExperienceListItem 
              nameItem={"Impact"}
              message={experience.moreInformation.messageForImpacts}
              items={experience.moreInformation.impacts}
              typeOfList={0}
            />
          }
          {/* Future Scopce */}
          { experience.moreInformation.futureScope !== '' &&
            <ExperienceTextItem 
              nameItem={"Future scope"}
              information={experience.moreInformation.futureScope}
            />
          }
        </div>
      }
    </>
  )
}

export default ExperienceDescription