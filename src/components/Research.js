import React from "react";
import Card from "react-bootstrap/Card";
import img from "../assets/imgs/sea-bg.png";
import img1 from "../assets/imgs/sea-swim.jpeg";
import img2 from "../assets/imgs/ppl-swim.jpeg";
import img3 from "../assets/imgs/woman-in-the-sea.webp";
import img4 from "../assets/imgs/happy-swim.jpeg";

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
                    recognised the potential benefits of the natural world to help alleviate symptoms of depression and anxiety.
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
            <div>
                <h3 className="wellbeing-title">
                <hr />
                    Wild swimming contributes to your overall wellbeing in the following ways
                </h3>

                <div className="article-container">
                    <div className="article-img">
                        <img src={img4} alt="Sea image"/>
                    </div>
                    <div className="article-text">
                        <h4>The release of endorphins through physical exercise</h4>
                        <p>
                            Physical exercise has proven to be an effective tool in managing depression and anxiety. 
                            Wild swimming offers a unique form of exercise that is low-impact yet provides a full-body 
                            workout. The rhythmic movement of swimming releases endorphins, the brain's natural "feel-good" 
                            chemicals, which can improve mood and reduce symptoms of depression. Engaging in regular physical 
                            activity through wild swimming can also improve sleep quality, boost self-esteem, and provide a 
                            sense of accomplishment, all of which contribute to improved well-being.
                        </p>
                    </div>       
                </div>

                <div className="article-container article-container-reverse">
                    <div className="article-img">
                        <img src={img2} alt="People together swimming"/>
                    </div>
                    <div className="article-text">
                        <h4>Social connection and community</h4>
                        <p>
                        Wild swimming has gained popularity as a social activity, with communities forming around their shared 
                        love for outdoor swimming. Joining a group of like-minded individuals can foster a sense of belonging 
                        and create a support network, both of which are vital in combating feelings of isolation and loneliness 
                        associated with depression and anxiety. The friendships and shared experiences of wild swimming communities 
                        can provide a sense of purpose, inspiration, and emotional support.
                        </p>
                    </div>       
                </div>

                <div className="article-container">
                    <div className="article-img">
                        <img src={img1} alt="People together at the beach"/>
                    </div>
                    <div className="article-text">
                        <h4>Finding Solace</h4>
                        <p>
                        As well as being a great way to connect with others, wild swimming also provides you with an opportunity 
                        to find solace in natural environments making it a powerful means of self-care. As your body moves through 
                        the water your mind is allowed to wander and unwind. Stepping into the cool embrace of a secluded lake or 
                        diving beneath the waves of the ocean, you can leave behind the worries and stresses of daily life. In 
                        these serene and untamed environments, the mind can find stillness, and the soul can find solace.
                        </p>
                    </div>       
                </div>

                <div className="article-container article-container-reverse">
                    <div className="article-img">
                    <img src={img3} alt="Woman in the sea"/>
                    </div>
                    <div className="article-text">
                        <h4>Mindfulness and Flow State</h4>
                        <p>
                        Swimming, particularly in natural bodies of water, provides an environment conducive to mindfulness and 
                        the attainment of a flow state. Flow is a state of optimal engagement and focus, where individuals become 
                        completely absorbed in the activity at hand. Wild swimming, with its sensory stimulation and invigorating 
                        nature, can enable the attainment of flow, promoting a sense of fulfilment and relief from anxious and 
                        depressive thoughts.
                        </p>
                    </div>       
                </div>

                <div className="article-container">
                    <div className="article-img">
                        <img src={img} alt="Sea image"/>
                    </div>
                    <div className="article-text">
                        <h4>Cold-water Immersion</h4>
                        <p>
                        Cold-water immersion, also known as cold-water therapy, involves immersing your body in cold water for a 
                        specific period. This practice has been used in various cultures and traditions as a means of promoting 
                        physical and mental well-being. Athletes use it to aid their recovery after engaging in sport. It has gained 
                        in popularity thanks to social networking sites that contain videos showing people getting into baths and 
                        tubs full of chilly water and/or ice and you can buy portable ice baths for your garden. Recent research 
                        suggests that the effects of cold-water immersion extend beyond physical benefits, showing promise in 
                        enhancing mental health as well. Wild swimming provides the best of both worlds – you immerse yourself in 
                        cold water but also have the added benefit of being in nature and all the advantages that provides.
                        </p>
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default ResearchPage;
