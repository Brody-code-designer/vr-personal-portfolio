import React, {useEffect, useState} from "react";

// A responsive hook that returns sizes and positions as a number for 3D objects to be mobile Responcive

export const useResponsive3d = () => {

    //This is the window Width in which responsive behavior will occur
    const breakpoint = 620

    //setWidth is the current windows width in px
    const [width, setWidth] = useState(window.innerWidth)

    //these states change based on the breakpoints
    //variables for the title page
    const [titleSize, setTitleSize] = useState(5)
    const [titleXPosition, setTitleXPosition] = useState(-9)
    const [titleYPosition, setTitleYPosition] = useState(6)
    const [titleGroupYPosition, setTitleGroupYPosition] = useState(0)

    //variables for the profession Title
    const [professionSize, setProfessionSize] = useState(1)
    const [professionTitleSize, setProfessionTitleSize] = useState(1.5)
    const [professionXPosition, setProfessionXPosition] = useState(-10)
    const [professionYPosition, setProfessionYPosition] = useState(-5)
    const [professionTitleXPosition, setProfessionTitleXPosition] = useState(3)
    const [professionTitleYPosition, setProfessionTitleYPosition] = useState(-5)

    //variables for the skills title section
    const [skillsTitleSize, setSkillsTitleSize] = useState(5)
    const [skillsTitleXPosition, setSkillsTitleXPosition] = useState(20)
    const [skillsTitleYPosition, setSkillsTitleYPosition] = useState(7)
    const [skillsTitleZPosition, setSkillsTitleZPosition] = useState(-15)

    //variables for the skills text section
    const [skillsTextSize, setSkillsTextSize] = useState(1.5)
    const [skillsTextXPosition, setSkillsTextXPosition] = useState(0)
    const [skillsTextYPosition, setSkillsTextYPosition] = useState(0)
    const [skillsTextZPosition, setSkillsTextZPosition] = useState(-15)
    const [skillsIconSize, setSkillsIconSize] = useState(12)
    const [skillsIconZPositionSize, setSkillsIconZPositionSize] = useState(5)

    //variables for the Projects title section
    const [projectsTitleSize, setProjectsTitleSize] = useState(5)
    const [projectsTitleXPosition, setProjectsTitleXPosition] = useState(-20)
    const [projectsTitleYPosition, setProjectsTitleYPosition] = useState(7)
    const [projectsTitleZPosition, setProjectsTitleZPosition] = useState(10)

    //variables for the Projects text section
    const [projectsTextSize, setProjectsTextSize] = useState(2.5)
    const [projectsTextXPosition, setProjectsTextXPosition] = useState(0)
    const [projectsTextYPosition, setProjectsTextYPosition] = useState(0)
    const [projectsTextZPosition, setProjectsTextZPosition] = useState(0)
    const [projectsExampleSize, setProjectsExampleSize] = useState(14)
    const [projectsExampleZPosition, setProjectsExampleZPosition] = useState(18)
    const [projectsExampleYPosition, setProjectsExampleYPosition] = useState(0)
    const [projectsExampleYRotation, setProjectsExampleYRotation] = useState(2.3)
    const [projectsExpNinjaExampleSize, setProjectsExpNinjaExampleSize] = useState(0.08)
    const [projectsExpNinjaExampleZPosition, setProjectsExpNinjaExampleZPosition] = useState(18)
    const [projectsExpNinjaExampleYPosition, setProjectsExpNinjaExampleYPosition] = useState(-8)
    const [projectsExpNinjaExampleYRotation, setProjectsExpNinjaExampleYRotation] = useState(2.3)

    //variables for the Contact Form
    const [contactFormTextSize, setContactFormTextSize] = useState(5)
    const [contactFormTextXPosition, setContactFormTextXPosition] = useState(-20)
    const [contactFormTextYPosition, setContactFormTextYPosition] = useState(7)
    const [contactFormTextZPosition, setContactFormTextZPosition] = useState(10)

//This determines the size of the window
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, titleSize])

    //this sets the sizes and positions of 3d objects based on the size of the window and a breaking point
    useEffect(() => {
        const handleResize = () => {
            if (breakpoint < width) {
                //set title
                setTitleSize(5)
                setTitleXPosition(-9)
                setTitleYPosition(6)
                setTitleGroupYPosition(0)
                //set profession text
                setProfessionSize(1)
                setProfessionTitleSize(1.5)
                setProfessionXPosition(-10)
                setProfessionYPosition(-5)
                setProfessionTitleXPosition(3)
                setProfessionTitleYPosition(-5)
                //set skills title
                setSkillsTitleSize(5)
                setSkillsTitleXPosition(20)
                setSkillsTitleYPosition(7)
                //set skills text
                setSkillsTextSize(1.5)
                setSkillsTextXPosition(0)
                setSkillsTextYPosition(0)
                setSkillsTextZPosition(-15)
                setSkillsIconSize(12)
                setSkillsIconZPositionSize(5)
                //set projects title
                setProjectsTitleSize(5)
                setProjectsTitleXPosition(-20)
                setProjectsTitleYPosition(7)
                setProjectsTextZPosition(10)
                //set projects text
                setProjectsTextSize(2.5)
                setProjectsTextXPosition(0)
                setProjectsTextYPosition(0)
                setProjectsTextZPosition(0)
                setProjectsExampleSize(14)
                setProjectsExampleZPosition(18)
                setProjectsExampleYPosition(0)
                setProjectsExampleYRotation(2.3)
                setProjectsExpNinjaExampleSize(0.08)
                setProjectsExpNinjaExampleYPosition(-8)
                setProjectsExpNinjaExampleZPosition(18)
                setProjectsExpNinjaExampleYRotation(2.3)
                //set contact form text
                setContactFormTextSize(2)
                setContactFormTextXPosition(0)
                setContactFormTextYPosition(0)
                setContactFormTextZPosition(0)
            } else if (breakpoint > width) {
                //set title
                setTitleSize(3)
                setTitleXPosition(-5)
                setTitleYPosition(3)
                setTitleGroupYPosition(5)
                //set profession text
                setProfessionSize(0.9)
                setProfessionTitleSize(1.8)
                setProfessionXPosition(-5)
                setProfessionYPosition(1)
                setProfessionTitleXPosition(-5)
                setProfessionTitleYPosition(-2)
                //set skills
                setSkillsTitleSize(2)
                setSkillsTitleXPosition(20)
                setSkillsTitleYPosition(7)
                setSkillsTitleZPosition(-6)
                //set skills text
                setSkillsTextSize(1.5)
                setSkillsTextXPosition(0)
                setSkillsTextYPosition(0)
                setSkillsTextZPosition(-8)
                setSkillsIconSize(6)
                setSkillsIconZPositionSize(5)
                //set projects title
                setProjectsTitleSize(3.5)
                setProjectsTitleXPosition(-20)
                setProjectsTitleYPosition(11)
                setProjectsTitleZPosition(7.5)
                //set projects text
                setProjectsTextSize(1.5)
                setProjectsTextXPosition(0)
                setProjectsTextYPosition(5)
                setProjectsTextZPosition(-2)
                setProjectsExampleSize(14)
                setProjectsExampleZPosition(0)
                setProjectsExampleYPosition(-6)
                setProjectsExampleYRotation(1.570796)
                setProjectsExpNinjaExampleSize(0.05)
                setProjectsExpNinjaExampleYPosition(-12)
                setProjectsExpNinjaExampleZPosition(0)
                setProjectsExpNinjaExampleYRotation(1.570796)
                setContactFormTextSize(2)
                setContactFormTextXPosition(0)
                setContactFormTextYPosition(0)
                setContactFormTextZPosition(0)
            }
        }
        handleResize()
        // return () => handleResize
    }, [width])

    return { //these are all the returned exports
        titleSize,
        titleXPosition,
        titleYPosition,
        titleGroupYPosition,
        professionSize,
        professionTitleSize,
        professionXPosition,
        professionYPosition,
        professionTitleXPosition,
        professionTitleYPosition,
        skillsTitleSize,
        skillsTitleXPosition,
        skillsTitleYPosition,
        skillsTitleZPosition,
        skillsTextSize,
        skillsTextXPosition,
        skillsTextYPosition,
        skillsTextZPosition,
        skillsIconSize,
        skillsIconZPositionSize,
        projectsTitleSize,
        projectsTitleXPosition,
        projectsTitleYPosition,
        projectsTitleZPosition,
        projectsTextSize,
        projectsTextXPosition,
        projectsTextYPosition,
        projectsTextZPosition,
        projectsExampleSize,
        projectsExampleZPosition,
        projectsExampleYPosition,
        projectsExampleYRotation,
        projectsExpNinjaExampleSize,
        projectsExpNinjaExampleYPosition,
        projectsExpNinjaExampleZPosition,
        projectsExpNinjaExampleYRotation,
        contactFormTextSize,
        contactFormTextXPosition,
        contactFormTextYPosition,
        contactFormTextZPosition
    }
}

