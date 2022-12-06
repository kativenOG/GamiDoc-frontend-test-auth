import {useEffect, useState} from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const biblio = [
  "Koivisto, J., & Hamari, J. (2019). The rise of motivational information systems: A review of gamification research. International Journal of Information Management, 45, 191-210.",
  "Fortes Tondello, G., Premsukh, H., & Nacke, L. (2018, January). A theory of gamification principles through goal-setting theory. Hawaii International Conference on System Sciences.",
  "Kim, B. (2015). Designing gamification in the right way. Library technology reports, 51(2), 29–35. ",
  "Tondello, G. F., Wehbe, R. R., Diamond, L., Busch, M., Marczewski, A., & Nacke, L. E. (2016, October). The gamification user types hexad scale. In Proceedings of the 2016 annual symposium on computer-human interaction in play (pp. 229-243).",
  "Zahedi, L., Batten, J., Ross, M., Potvin, G., Damas, S., Clarke, P., & Davis, D. (2021). Gamification in education: A mixed-methods study of gender on computer science students’ academic performance and identity development. Journal of Computing in Higher Education, 33(2), 441-474.",
  "Su, F., Zou, D., Xie, H., & Wang, F. L. (2021). A comparative review of mobile and non-mobile games for language learning. SAGE Open, 11(4)",
  "McEwan, M., Johnson, D., Wyeth, P., & Blackler, A. (2012, July). Videogame control device impact on the play experience. In Proceedings of the 8th australasian conference on interactive entertainment: Playing the system (pp. 1-3).",
  "Chen, Y., & Pu, P. (2014). Healthytogether: exploring social incentives for mobile fitness applications. In Proceedings of the second international symposium of chinese chi (pp. 25–34).",
  "Goh, D. H., & Lee, C. S. (2011). Perceptions, quality and motivational needs in image tagging human computation games. Journal of Information Science, 37(5), 515–531.",
  "Lee, T. Y., Dugan, C., Geyer, W., Ratchford, T., Rasmussen, J., Shami, N. S., & Lupushor, S. (2013). Experiments on motivational feedback for crowdsourced workers. In Proceedings of the international aaai conference on web and social media (Vol. 7, pp. 341–350).",
  "Massung, E., Coyle, D., Cater, K. F., Jay, M., & Preist, C. (2013, April). Using crowdsourcing to support pro-environmental community activism. In Proceedings of the SIGCHI Conference on human factors in Computing systems (pp. 371-380).",
  "Mekler, E. D., Brühlmann, F., Opwis, K., & Tuch, A. N. (2013, October). Do points, levels and leaderboards harm intrinsic motivation? An empirical analysis of common gamification elements. In Proceedings of the First International Conference on gameful design, research, and applications (pp. 66-73).",
  "Morschheuser, B., Maedche, A., & Walter, D. (2017, February). Designing cooperative gamification: Conceptualization and prototypical implementation. In Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work and Social Computing (pp. 2410-2421).",
  "Liu, D., Li, X., & Santhanam, R. (2013). Digital games and beyond: What happens when players compete?. Mis Quarterly, 111-124.",
  "Toda, A. M., Klock, A. C., Oliveira, W., Palomino, P. T., Rodrigues, L., Shi, L., ... & Cristea, A. I. (2019). Analysing gamification elements in educational environments using an existing Gamification taxonomy. Smart Learning Environments, 6(1), 1-14.",
  "Toda, A. M., Oliveira, W., Klock, A. C., Palomino, P. T., Pimenta, M., Gasparini, I., ... & Cristea, A. I. (2019, July). A taxonomy of game elements for gamification in educational contexts: Proposal and evaluation. In 2019 IEEE 19th International Conference on Advanced Learning Technologies (ICALT) (Vol. 2161, pp. 84-88). IEEE.",
  "Hassan, M. A., Habiba, U., Khalid, H., Shoaib, M., & Arshad, S. (2019). An adaptive feedback system to improve student performance based on collaborative behavior. Ieee Access, 7, 107171–107178.",
  "Tekinbas, K. S., & Zimmerman, E. (2003). Rules of play: Game design fundamentals. MIT press.",
  "Hallifax, S., Lavoué, E., & Serna, A. (2020, July). To tailor or not to tailor gamification? an analysis of the impact of tailored game elements on learners’ behaviours and motivation. In International Conference on Artificial Intelligence in Education (pp. 216-227). Springer, Cham.",
  "Oliveira, W., Hamari, J., Shi, L., Toda, A. M., Rodrigues, L., Palomino, P. T., & Isotani, S. (2022). Tailored gamification in education: A literature review and future agenda. Education and Information Technologies, 1-34.",
  "Bartle, R. (1996). Hearts, clubs, diamonds, spades: Players who suit MUDs. Journal of MUD research, 1(1), 19.",
  "Ferro, L. S., Walz, S. P., & Greuter, S. (2013, September). Towards personalised, gamified systems: an investigation into game design, personality and player typologies. In Proceedings of The 9th Australasian Conference on Interactive Entertainment: Matters of Life and Death (pp. 1-6).",
  "Denden, M., Tlili, A., Essalmi, F., & Jemni, M. (2017, October). Educational gamification based on personality. In 2017 IEEE/ACS 14th International Conference on Computer Systems and Applications (AICCSA) (pp. 1399-1405). IEEE.",
  "Schell, J. (2008). The Art of Game Design: A book of lenses. CRC press.",
  "Walk, W., Görlich, D., & Barrett, M. (2017). Design, dynamics, experience (DDE): an advancement of the MDA framework for game design. In Game dynamics (pp. 27-45). Springer, Cham.",
  "Suh, A., Cheung, C. M., Ahuja, M., & Wagner, C. (2017). Gamification in the workplace: The central role of the aesthetic experience. Journal of Management Information Systems, 34(1), 268-305."
]

const figure2 = ({ src, width, quality }) => {
  return `https://i.imgur.com/hRswSlN.png`;
};

export default function Documentation() {
  const router = useRouter()
  const [selected,setSelected] = useState(1)
  
  // useEffect(()=>{
  //   const {select} = router.query
  //   if (parseInt(select,10)){
  //     setSelected(parseInt(select,10))
  //   }else{
  //     setSelected(1)
  //   }
  // },[])

  const biblio_jsx = 
          () => {
              let array=[]
              for (let i=0; i<biblio.length;i++){
                array.push(
                  <p id={"citation"+(i+1)} 
                     className={(selected == (i+1)) ? 
                                "shadow-md m-2 p-3 rounded-full font-bold bg-slate-300 text-blue-600 flex flex-row gap-2 items-center" 
                                : "m-2 p-3 rounded-full bg-slate-100 text-black flex flex-row gap-2 items-center" }
                     onClick={()=>{setSelected(i+1)}} 
                  >
                      <span className={(selected == (i+1)) ? 
                                        "font-bold p-1 rounded-full bg-slate-300 text-blue-600 ":
                                        "font-semibold p-1 rounded-full bg-slate-400 text-white "
                      }>
                          {(i<10) ? " " + (i+1) + ": " : (i+1) + ":"}
                      </span> 
                      <p>{biblio[i]}</p>
                  </p>
                )
              }
              return array 
            }
  return (
    <div>
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex flex-row p-10 ">
        <div className="w-full relative top-0 ">
          {" "}
          <Sidebar />{" "}
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            A holistic model for Gamification
          </h1>
          <div>
            Several researchers on gamification unanimously agree that
            gamification design should follow a holistic and standard procedure
            (Fitz-Walter, 2015; Martì-Parreno et al., 2016; Morschheuser et al.,
            2017). Although several models have been proposed, none of them
            provide a method to increase the statistical rigor. This draft
            introduces a brief definition of a general model for the designing
            phase of gamified software. The graphic representation can be seen
            in Figure 1. This model will be associated with a peer-reviewed
            analysis of the design phase, in order to give constructive feedback
            from the scientific community before the development. Moreover, this
            model will provide a transparent and open access data collection of
            gamification elements in different domains. Finally, this model will
            provide several standardized methodologies for the following
            analysis.
            <br/><br/>
          </div>
          <div className="justify-center items-center flex">
            <Image
              src="/new_model.jpg"
              alt="GamiDoc"
              width={1202 / 2}
              height={784 / 2}
            />
            <br/><br/>
          </div>
          <div id="context" className="pt-2">
            <h1 className="font-bold text-xl">1 - Context </h1>
            The context component allows researchers and practitioners to design the gamification 
            system keeping track of contextual information. This section provides four subcomponents to be considered: 
            application domain, aim of the software, definition of target users, and the 
            selection of encouraged and avoided behaviors.
            <br /> <br /> 
          </div>
          <div id="domain" className="mt-3">
            <h1 className="font-bold text-lg">1.1 - Domain </h1>
            The domain component collects the application domain in which the gamified solution will be used.
            For the taxonomy of possible domains, we chose the list included in <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation1"); setSelected(1)}}>Koivisto & Hamari, 2019.</span>
            <br /> <br />
          </div>
          <div id="aim" className="mt-3">
            <h1 className="font-bold text-lg">1.2 - Aim </h1>
            The goals of many gamification projects do not appear to have been clearly set out before the projects began. 
            The goal of a gamified solution may simply be to increase the number of students, to increase the cooperation among users, or simply to support a behavior change towards eco-sustainable behaviors. 
            In order to help researchers and practitioners in the reasoning underlying the design and development of software, the aim component collects information about the goal of the designed software and why it has been thought.
            This selection includes three different types of aims, <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation2"); setSelected(2) }}>reported by Tondello, Premsukh, and Nacke, 2018</span>: <br/><bold className="font-bold">(1) Outcome goal</bold>, which refers to the accomplishment of a very specific result. For example, many goals involve completing specific tasks; 
            therefore, the result is well-defined. Challenges, quests, and exploratory tasks are well suited to define outcome goals;<br/><bold className="font-bold">(2) Performance goal</bold>, which refers to doing well by one’s own performance standards. For example, earning a specific number of points, reaching a specific position in a leaderboard, or completing a specific number of tasks; <br/><bold className="font-bold">(3) Process or Learning goal</bold> is related to learning new skills. 
            Research has shown that when the individual lacks the necessary skills or knowledge to
            accomplish a difficult goal, it is better to set a learning goal instead of an outcome or a performance goal.
            <br /> <br />
          </div>{" "}
          <div id="behaviors" className="mt-3">
            <h1 className="font-bold text-lg">1.3 - Behaviors to be encouraged </h1>
            Game behavior component refers to the clarification of the <bold className="font-bold">game rules</bold>, <bold className="font-bold">game mechanics</bold>, <bold className="font-bold">game progression</bold>. 
            The game rules determine, just like in any other game, how the game inside the application is played. The mechanics describe what happens when a player does something in the game in order to achieve the game’s goal. Progression is defined through a subset of game mechanics that describe how the game overall progresses like, for example, player levels advancing and, thereby, unlocking new things for the game. The final output consists of a list of the game rules, in which mechanics and progression are specified. 
            Moreover, this part is linked to the dynamics subcomponent, which provides a list of possible dynamics that can emerge runtime or after a certain number of runs. 
            This allows researchers and practitioners to (1) monitor the interaction between users
            and mechanics, and (2) to modify the design in order to avoid inadequate interactions and behaviors.  
            <br /> <br />
          </div>{" "}
          <div id="target" className="mt-3">
            <h1 className="font-bold text-lg">1.4 - Target </h1>
            Several documents in the gamification field suggest that users’ individual differences and preferences are crucial for the success of gamified solutions <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation3"); setSelected(3)}}>(B. Kim, 2015;</span> <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation1"); setSelected(1)}}>Koivisto & Hamari, 2019;</span> <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation4"); setSelected(4)}}>Tondello et al., 2016;</span> <span className="underline text-blue-400 hover:text-blue-500" onClick={()=> {router.push("documentation#citation5"); setSelected(5)}}>Zahedi et al., 2021</span>). 
            The existing taxonomies take into account the personality traits or the possible user type. Thus, we decided to develop our taxonomy, following the possible users’ category. The target
            users component collects all the relevant data related to the users who will be involved in the use of the software (<bold className="font-bold">category</bold> and <bold className="font-bold">age ranges</bold>)
            The difficulty in the development of a possible exhaustive taxonomy could lead to explorative applications of gamified solutions for studying new categories.
            <br /> <br />
          </div>{" "}
          <div id="technology" className="mt-3">
            <h1 className="font-bold text-xl">2 - Technology </h1>
              The technology component takes into account hardware, software, input and output devices, any other technological components involved in the software development, 
              and the kind of device in which the software will be used. Since there are several different devices that can be used for gamified solutions, 
              and different game elements fit in in a different way according to the device used <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation6"); setSelected(6)}}>(Su, Zou, Xie, and Wang, 2021)</span>, and different interactions with games can change the user experience 
              <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation7"); setSelected(7)}}>(McEwan, Johnson, Wyeth, and Blackler, 2012)</span>, it is important to comprehend if the selected choices could fit the context information (i.e. device type, game engine, etc), 
              and then if the selected gamified elements are optimal for the selected device. This component allows the selection of a choice within:
              <bold className="font-bold">(1) mobile, (2) tablet, (3) computer/laptop, (4) head-mounted display, (5) augmented reality</bold> and <bold className="font-bold">(6) real life</bold>.
              <br /> <br />
          </div>{" "}
          <div id="modality" className="mt-3">
            <h1 className="font-bold text-xl">3 - Modality</h1>
            This component is dedicated to the definition of the main modality included in the gamification software. Despite the scarcity of evidence on cooperative gamification, the few results in the literature show differences in cooperative and competitive modalities of gamification and that different game elements support the different modalities <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation7"); setSelected(7)}}>(Chen & Pu, 2014; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation9"); setSelected(9)}}>Goh & Lee, 2011; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation10"); setSelected(10)}}>T. Y. Lee et al., 2013; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation11"); setSelected(11)}}>Massung, Coyle,
            Cater, Jay, & Preist, 2013; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation12"); setSelected(12)}}>Mekler, Br ̈uhlmann, Opwis, & Tuch, 2013; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation13"); setSelected(13)}}>Morschheuser, Maedche, & Walter, 2017)</span>. In the identification of different gamification modalities, we decided to follow the distinction made by Morschheuser and colleagues <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation13"); setSelected(13)}}>(Morschheuser, Maedche, & Walter, 2017)</span> between <bold className="font-bold">(1) individual</bold>, <bold className="font-bold">(2) cooperative</bold>, <bold className="font-bold">(3) competitive</bold>, and <bold className="font-bold">(4) cooperative-competitive</bold> gamification features <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation14"); setSelected(14)}}>(see also Liu, Li, & Santhanam (2013))</span>, 
            with the last one referring to those elements which support users’ cooperation with their ingroup (i.e., team mates), and competition with the outgroup (i.e., team competition). 
            Therefore, based on the main modality included in the design, each gamified software will be divided into the same categories. 
            Our definition of gamification modality does not include emergent behaviors (i.e., emergent cooperation between opponents to hinder the first user on the leaderboard) or behaviors to be encouraged outside of the software (i.e., cooperation as behavior to be encouraged outside of the software) since it does not lead to a univocal modality (i.e., cooperation in real life can be reached through cooperation or competition as well in the gamified software).             
              <br /> <br />
          </div>{" "}          
          <div id="core" className="mt-3">
            <h1 className="font-bold text-xl">4 - Core </h1>
            The core part is the salient part of the game design, since it collects the game rules, 
            gamification elements and feedback used in the software. 
            It is composed of the following subcomponents: <bold className="font-bold">game behavior </bold>, 
            <bold className="font-bold">gamification elements </bold>, and <bold className="font-bold">feedback</bold>.
            <br/><br/>
          </div>{" "}
          <div id="gamebehavior" className="mt-3">
            <h1 className="font-bold text-lg">4.1 - Game behavior </h1>
            Game behavior component refers to the clarification of the <bold className="font-bold">game rules, game mechanics, game progression</bold>. The game rules determine, just like in any other game, how the game inside the application is played. The mechanics describe what happens when a player does something in the game in order to achieve the game’s goal. Progression is defined through a subset of game mechanics that describe how the game overall progresses like, for example, player levels advancing and, thereby, unlocking new things for the game. The final output consists of a list of the game rules, in which mechanics and progression are specified. Moreover, this part is linked to the dynamics
            subcomponent, which provides a list of possible dynamics that can emerge runtime or after a certain number of runs. This allows researchers and practitioners to (1) monitor the interaction between users
            and mechanics, and (2) to modify the design in order to avoid inadequate interactions and behaviors.
            <br/><br/>
          </div>{" "}
          <div id="gamificationelement" className="mt-3">
            <h1 className="font-bold text-lg">4.2 - Gamification Elements </h1>
              Gamification elements component shows a list of gamified elements used
              in the software. The previous components are useful to better understand
              which gamification elements fit in the proper way. The selected taxonomy
              of possible gamified elements comes from the work of Toda and colleagues
              <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation15"); setSelected(15)}}>(Toda, Klock, et al., 2019;</span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation16"); setSelected(16)}}>Toda, Oliveira, et al., 2019)</span>: <br/>
              <br/>
              • <bold className="font-bold">Performance</bold>: Acknowledgement, Level, Progression, Points, Stats; <br/>
              • <bold className="font-bold">Ecological</bold>: Chance, Imposed choice, Economy, Rarity, Time Pressure; <br/>
              • <bold className="font-bold">Social</bold>: Competition, Cooperation, Reputation, Social Pressure; <br/>
              • <bold className="font-bold">Personal</bold>: Novelty, Objectives, Puzzle, Renovation, Sensation; <br/>
              • <bold className="font-bold">Fictional</bold>: Narrative, Storytelling. <br/>
              <br/>
          </div>{" "}
          <div id="feedback" className="mt-3">
            <h1 className="font-bold text-lg">4.3 - Feedback </h1>
            Feedback component refers to the selection of the kind of feedback used in the software. 
            Since there are different ways to provide feedback, mainly according to the content and timing, 
            and since feedback works differently across certain domains and users <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation17"); setSelected(17)}}>(Hassan et al., 2019)</span>, 
            this section is needed to specify the content and the timing of used feedback. The selected taxonomy comes from <span className="underline text-blue-400  hover:text-blue-500" >(Bassanelli & Bucchiarone, n.d.)</span>. 
            Hence, GamiDOC provides a choice according to the <bold className="font-bold">timing</bold> (<bold className="font-bold">immediate feedback</bold>, and <bold className="font-bold">late feedback</bold>, <bold className="font-bold">personalized feedback </bold>timing), 
            and a choice for the <bold className="font-bold">content</bold> (<bold className="font-bold">corrective feedback</bold>, <bold className="font-bold">explanatory feedback</bold>, <bold className="font-bold">reporting feedback</bold>, and <bold className="font-bold">personalized feedback</bold> content).
            <br/><br/>
          </div>{" "}
          <div id="dynamics" className="mt-3">
            <h1 className="font-bold text-lg">5 - Dynamics</h1>
            With dynamics we mean interactions between users and mechanics or other game elements, different patterns and behavioral strategies that are more complex than the sum of their parts. 
            Thus, most of a game is experienced through its dynamics instead of its mechanics <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation18"); setSelected(18)}}>(Tekinbas & Zimmerman, 2003)</span>.
            Hence, it’s important to outline not only the core mechanics and the secondary mechanics, but also how users interact with them, and which are users’ predictable behaviors. 
            Moreover, it’s important to outline which kind of interactions we want to avoid.
            <br /> <br />
          </div>{" "}
          <div id="personalization" className="mt-3">
            <h1 className="font-bold text-lg">6: Personalization </h1>
            Several solutions in the gamification field suggest a personalization or adaptation 
            of the gamified solutions according to several individual differences and preferences <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation19"); setSelected(19)}}>(Hallifax, Lavoúe, & Serna, 2020; </span>
            <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation20"); setSelected(20)}}>Oliveira et al., 2022)</span>, such as the player type <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation21"); setSelected(21)}}>(Bartle, 1996; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation22"); setSelected(22)}}>Ferro, Walz, and Greuter, 2013; </span><span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation4"); setSelected(4)}}>Tondello et al., 2016)</span>, 
            personality traits <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation23"); setSelected(23)}}>(Denden, Tlili, Essalmi, & Jemni, 2017)</span>, motivation and goal <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation2"); setSelected(2)}}>(Tondello et al., 2018)</span>, and so forth. 
            For this, we decided to add a part related to the selection of a personalization modality and a possible adaptation feature.
            <br /> <br />
          </div>{" "}
          <div id="aesthetics" className="mt-3">
            <h1 className="font-bold text-lg">7 - Aesthetics</h1>
            The aesthetics component contains all the information related to the aesthetic part of the software. 
            Aesthetics has a direct relationship with the users’ experience: the more beautiful the aesthetic part is, the more interesting and compelling the users will find it. 
            Hence, this leads to better levels of motivation and engagement <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation24"); setSelected(24)}}>(Schell, 2008; </span> <span className="underline text-blue-400  hover:text-blue-500" onClick={()=> {router.push("documentation#citation25"); setSelected(25)}}>Walk, Gorlich, & Barrett, 2017)</span>. 
            The rationale behind this feature comes from several examples of game design documents we have explored during the design of this tool. 
            Despite this component being highly regarded when making video games, it seems to be completely neglected when analyzing serious games and gamified solutions <span className="underline text-blue-400  hover:text-blue-500"  onClick={()=> {router.push("documentation#citation26"); setSelected(26)}}>(Suh, Cheung, Ahuja, & Wagner, 2017)</span>. 
            In this part, researchers and practitioners have to report decisions and examples related to the aesthetic part and decisions on the user interface.
          </div>
          <div className="mt-5  ">
            <h1 className="font-bold text-xl pb-3">8 - Bibliography</h1>
            {biblio_jsx()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

{/* <ol> */}
{/*     <li id="citation1" className="m-2"><span className="font-semibold ">1)</span> Koivisto, J., & Hamari, J. (2019). The rise of motivational information systems: A review of gamification research. International Journal of Information Management, 45, 191-210. </li> */}
{/*     <li id="citation2" className="m-2"><span className="font-semibold ">2)</span> Fortes Tondello, G., Premsukh, H., & Nacke, L. (2018, January). A theory of gamification principles through goal-setting theory. Hawaii International Conference on System Sciences. </li> */}
{/*     <li id="citation3" className="m-2"><span className="font-semibold ">3)</span> Kim, B. (2015). Designing gamification in the right way. Library technology reports, 51(2), 29–35. </li> */}
{/*     <li id="citation4" className="m-2"><span className="font-semibold ">4)</span> Tondello, G. F., Wehbe, R. R., Diamond, L., Busch, M., Marczewski, A., & Nacke, L. E. (2016, October). The gamification user types hexad scale. In Proceedings of the 2016 annual symposium on computer-human interaction in play (pp. 229-243). </li> */}
{/*     <li id="citation5" className="m-2"><span className=" font-semibold ">5)</span> Zahedi, L., Batten, J., Ross, M., Potvin, G., Damas, S., Clarke, P., & Davis, D. (2021). Gamification in education: A mixed-methods study of gender on computer science students’ academic performance and identity development. Journal of Computing in Higher Education, 33(2), 441-474. </li> */}
{/*     <li id="citation6" className="m-2"><span className=" font-semibold ">6)</span> Su, F., Zou, D., Xie, H., & Wang, F. L. (2021). A comparative review of mobile and non-mobile games for language learning. SAGE Open, 11(4).</li> */}
{/*     <li id="citation7" className="m-2"><span className=" font-semibold ">7)</span> McEwan, M., Johnson, D., Wyeth, P., & Blackler, A. (2012, July). Videogame control device impact on the play experience. In Proceedings of the 8th australasian conference on interactive entertainment: Playing the system (pp. 1-3).</li> */}
{/*     <li id="citation8" className="m-2"><span className=" font-semibold ">8)</span> Chen, Y., & Pu, P. (2014). Healthytogether: exploring social incentives for mobile fitness applications. In Proceedings of the second international symposium of chinese chi (pp. 25–34). </li> */}
{/*     <li id="citation9" className="m-2"><span className=" font-semibold ">9)</span> Goh, D. H., & Lee, C. S. (2011). Perceptions, quality and motivational needs in image tagging human computation games. Journal of Information Science, 37(5), 515–531. </li> */}
{/*     <li id="citation10" className="m-2"><span className=" font-semibold ">10)</span> Lee, T. Y., Dugan, C., Geyer, W., Ratchford, T., Rasmussen, J., Shami, N. S., & Lupushor, S. (2013). Experiments on motivational feedback for crowdsourced workers. In Proceedings of the international aaai conference on web and social media (Vol. 7, pp. 341–350). </li> */}
{/*     <li id="citation11" className="m-2"><span className=" font-semibold ">11)</span> Massung, E., Coyle, D., Cater, K. F., Jay, M., & Preist, C. (2013, April). Using crowdsourcing to support pro-environmental community activism. In Proceedings of the SIGCHI Conference on human factors in Computing systems (pp. 371-380). </li> */}
{/*     <li id="citation12" className="m-2"><span className=" font-semibold ">12)</span> Mekler, E. D., Brühlmann, F., Opwis, K., & Tuch, A. N. (2013, October). Do points, levels and leaderboards harm intrinsic motivation? An empirical analysis of common gamification elements. In Proceedings of the First International Conference on gameful design, research, and applications (pp. 66-73). </li> */}
{/*     <li id="citation13" className="m-2"><span className=" font-semibold ">13)</span> Morschheuser, B., Maedche, A., & Walter, D. (2017, February). Designing cooperative gamification: Conceptualization and prototypical implementation. In Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work and Social Computing (pp. 2410-2421).</li> */}
{/*     <li id="citation14" className="m-2"><span className=" font-semibold ">14)</span> Liu, D., Li, X., & Santhanam, R. (2013). Digital games and beyond: What happens when players compete?. Mis Quarterly, 111-124.</li> */}
{/*     <li id="citation15" className="m-2"><span className=" font-semibold ">15)</span> Toda, A. M., Klock, A. C., Oliveira, W., Palomino, P. T., Rodrigues, L., Shi, L., ... & Cristea, A. I. (2019). Analysing gamification elements in educational environments using an existing Gamification taxonomy. Smart Learning Environments, 6(1), 1-14. </li> */}
{/*     <li id="citation16" className="m-2"><span className=" font-semibold ">16)</span> Toda, A. M., Oliveira, W., Klock, A. C., Palomino, P. T., Pimenta, M., Gasparini, I., ... & Cristea, A. I. (2019, July). A taxonomy of game elements for gamification in educational contexts: Proposal and evaluation. In 2019 IEEE 19th International Conference on Advanced Learning Technologies (ICALT) (Vol. 2161, pp. 84-88). IEEE. </li> */}
{/*     <li id="citation17" className="m-2"><span className=" font-semibold ">17)</span> Hassan, M. A., Habiba, U., Khalid, H., Shoaib, M., & Arshad, S. (2019). An adaptive feedback system to improve student performance based on collaborative behavior. Ieee Access, 7, 107171–107178. </li> */}
{/*     <li id="citation18" className="m-2"><span className=" font-semibold ">18)</span> Tekinbas, K. S., & Zimmerman, E. (2003). Rules of play: Game design fundamentals. MIT press. </li> */}
{/*     <li id="citation19" className="m-2"><span className=" font-semibold ">19)</span> Hallifax, S., Lavoué, E., & Serna, A. (2020, July). To tailor or not to tailor gamification? an analysis of the impact of tailored game elements on learners’ behaviours and motivation. In International Conference on Artificial Intelligence in Education (pp. 216-227). Springer, Cham. </li> */}
{/*     <li id="citation20" className="m-2"><span className=" font-semibold ">20)</span> Oliveira, W., Hamari, J., Shi, L., Toda, A. M., Rodrigues, L., Palomino, P. T., & Isotani, S. (2022). Tailored gamification in education: A literature review and future agenda. Education and Information Technologies, 1-34. </li> */}
{/*     <li id="citation21" className="m-2"><span className=" font-semibold ">21)</span> Bartle, R. (1996). Hearts, clubs, diamonds, spades: Players who suit MUDs. Journal of MUD research, 1(1), 19. </li> */}
{/*     <li id="citation22" className="m-2"><span className=" font-semibold ">22)</span> Ferro, L. S., Walz, S. P., & Greuter, S. (2013, September). Towards personalised, gamified systems: an investigation into game design, personality and player typologies. In Proceedings of The 9th Australasian Conference on Interactive Entertainment: Matters of Life and Death (pp. 1-6). </li> */}
{/*     <li id="citation23" className="m-2"><span className=" font-semibold ">23)</span> Denden, M., Tlili, A., Essalmi, F., & Jemni, M. (2017, October). Educational gamification based on personality. In 2017 IEEE/ACS 14th International Conference on Computer Systems and Applications (AICCSA) (pp. 1399-1405). IEEE.  </li> */}
{/*     <li id="citation24" className="m-2"><span className=" font-semibold ">24)</span> Schell, J. (2008). The Art of Game Design: A book of lenses. CRC press. </li> */}
{/*     <li id="citation25" className="m-2"><span className=" font-semibold ">25)</span> Walk, W., Görlich, D., & Barrett, M. (2017). Design, dynamics, experience (DDE): an advancement of the MDA framework for game design. In Game dynamics (pp. 27-45). Springer, Cham. </li> */}
{/*     <li id="citation26" className="m-2"><span className=" font-semibold ">26)</span> Suh, A., Cheung, C. M., Ahuja, M., & Wagner, C. (2017). Gamification in the workplace: The central role of the aesthetic experience. Journal of Management Information Systems, 34(1), 268-305. </li> */}
{/* </ol> */}
