import Header from './Header'
import Description from './Description'
import SkillsGrid from './gridOfSkills/SkillsGrid'

const TechStack = () => {
    return (
        <div id="Skills" className="relative h-full bg-white border-t-[1px] border-my-lightGray overflow-hidden flex items-center flex-col " >
            <Header/>
            <Description/>
            <SkillsGrid/>
        </div>
    )
}

export default TechStack