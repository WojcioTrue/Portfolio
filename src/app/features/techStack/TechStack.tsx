import Header from './Header'
import Description from './Description'
import SkillsGrid from './gridOfSkills/SkillsGrid'
import TechStackContextProvider from './techStackContext/TechStackContext'

const TechStack = () => {
    return (
        <TechStackContextProvider>
            <div id="Skills" className="relative min-h-full bg-white border-t-[1px] py-10 border-my-lightGray overflow-hidden flex items-center flex-col " >
                <Header />
                <Description />
                <SkillsGrid />
            </div>
        </TechStackContextProvider>

    )
}

export default TechStack