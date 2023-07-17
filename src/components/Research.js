import React from "react";
import Card from "react-bootstrap/Card";

const ResearchPage = () => {
    return (
        <div>
            <div className="article-page-intro">
                <h2 className="page-title">What Experts Say</h2>
                <p>Wild swimming for exercise, socialisation and the alleviation of depression and anxiety</p>
                <Card style={{maxWidth: "80%", boxShadow: "2px 2px 2px 1px var(--clr-dark)", backgroundColor: "#fafafa"}} className="mx-auto">
                    <Card.Body>
                        <Card.Text className="fst-italic text-center">
                            <b>DISCLAIMER:</b> There are conventional treatments for depression and anxiety and this 
                            article is not a substitute for professional advice. Please contact your G.P. or a mental 
                            health practitioner to support your path to wellness. Depression has been defined as persistent 
                            feelings of sadness, hopelessness, and a loss of interest in activities. Anxiety presents as 
                            excessive worry, restlessness, and a sense of impending danger or panic. Both these conditions 
                            can have a negative impact on your quality of life and there is growing evidence to suggest 
                            that spending time in natural bodies of water can have profound therapeutic benefits.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <p className="expert-info-intro">
                    Three experts, who specialise in mental health, outdoor therapy and cold-water immersion therapy have 
                    recognised the potential benefits of the natural world to help alleviate symptoms of depression and anxiety:
            </p>
            <div className="expert-info">
                <div className="expert-info-details">
                    <a href="https://www.wildandwell.org/speaker-link/dr-alan-kellas/" target="_blank">
                        <h4>Dr. Alan Kellas MBBS BA MRCPsych</h4>
                    </a>
                    <p>
                        Dr Kellas is a psychiatrist and advocate for nature-based therapies, who focuses on the importance of 
                        connecting with nature to support mental health. He looks at how nature can be a resource for mental health.
                    </p>
                </div>
                <div className="expert-info-details">
                    <a href="https://medicine.exeter.ac.uk/people/profile/index.php?web_id=Mathew_White" target="_blank">
                        <h4>Dr. Mathew White Msc Phd </h4>
                    </a>
                    <p>
                        Dr White is an environmental psychologist and lecturer at the University of Exeter. He has conducted research on 
                        the positive impact of outdoor activities, including wild swimming, on mental health. He explains that the 
                        combination of physical activity, exposure to nature, and social interaction can lead to improved well-being 
                        and reduced symptoms of depression and anxiety.
                    </p>
                </div>
                <div className="expert-info-details">
                    <a href="https://www.wimhofmethod.com/" target="_blank">
                        <h4>Wim Hof</h4>
                    </a>
                    <p>
                        Also known as "The Iceman" Wim Hof has bought the power of improving our health and wellness by regularly engaging 
                        in cold water therapy. Through his self-developed tools which include breathing techniques, cold exposure and 
                        meditation he suggests that we can improve mood, reduce stress, and increase resilience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResearchPage;
