import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const figure2 = ({ src, width, quality }) => {
  return `https://i.imgur.com/hRswSlN.png`;
};
export default function documentation() {
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
        <div className="">
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
              // loader={figure1}
              src="/new_model.jpg"
              alt="GamiDoc"
              width={1202 / 2}
              height={784 / 2}
            />
            <br/><br/>
          </div>
          <div id="context" className="pt-2">
            <h1 className="font-bold">1 Context </h1>
            {/* This model is composed of a first part related to the context */}
            {/* information, such as target users, the aim of the development, */}
            {/* application domain, and encouraged behaviors. According to */}
            {/* Morschheuser and colleagues (2017), it is a crucial part of the */}
            {/* design phase: indeed most of the gamification design models have a */}
            {/* part related to the user context. */}
            The context component allows researchers and practitioners to design the gamification 
            system keeping track of contextual information. This section provides four subcomponents to be considered: 
            application domain, aim of the software, definition of target users, and the 
            selection of encouraged and avoided behaviors.
            <br /> <br /> 
          </div>
          <div id="domain">
            <h1 className="font-bold">1.1 Domain </h1>
            {/* The domain is an important feature since gamification elements work */}
            {/* differently in relation to context and user differences (Zahedi, */}
            {/* 2021). Koivisto e Hamari find 22 different application domains: */}
            {/* 1.Education / Learning 2. Health / Exercise 3. Crowdsourcing */}
            {/* (includes information gathering, knowledge sharing, and citizen */}
            {/* science) 4. Social behavior / networking / sharing 5. Software */}
            {/* development/design 6. Business and Management 7. Ecological / */}
            {/* environmental behavior 8. eCommerce / eServices 9. Software */}
            {/* engineering 10. Marketing / Consumer behavior 11. Citizen / public */}
            {/* engagement / activity 12. Entertainment (includes gaming, watching */}
            {/* TV, media capturing) 13. Innovation 14. Transportation and Mobility */}
            {/* 15. Culture and Tourism 16. Architecture 17. Communication 18. */}
            {/* Emergency planning 19. Politics 20. Welfare / city / human / public */}
            {/* services 21. Work 22. Theory In this section, we ask designers to */}
            {/* identify the possible application domain. i.e. Application of the */}
            {/* software for promoting environmental behaviors.  */}
            The domain component collects the application domain in which the gamified solution will be used.
            For the taxonomy of possible domains, we chose the list included in <span className="underline text-blue-400">Koivisto & Hamari, 2019.</span>
            <br /> <br />
          </div>
          <div id="aim">
            <h1 className="font-bold">1.2 Aim </h1>
            {/* This model describes a top-down design. The development starts from */}
            {/* the identification of the final purpose. Hence, in this section, we */}
            {/* ask designers to list the aims of the future software. i.e. The aim */}
            {/* of the software is to promote behaviors to reduce pollution and */}
            {/* respect nature. */}
            The goals of many gamification projects do not appear to have been clearly set out before the projects began. 
            The goal of a gamified solution may simply be to increase the number of students, to increase the cooperation among users, or simply to support a behavior change towards eco-sustainable behaviors. 
            In order to help researchers and practitioners in the reasoning underlying the design and development of software, the aim component collects information about the goal of the designed software and why it has been thought.
            This selection includes three different types of aims, <span className="underline text-blue-400">reported by Tondello, Premsukh, and Nacke, 2018</span>: <br/><bold className="font-bold">(1) Outcome goal</bold>, which refers to the accomplishment of a very specific result. For example, many goals involve completing specific tasks; 
            therefore, the result is well-defined. Challenges, quests, and exploratory tasks are well suited to define outcome goals;<br/><bold className="font-bold">(2) Performance goal</bold>, which refers to doing well by one’s own performance standards. For example, earning a specific number of points, reaching a specific position in a leaderboard, or completing a specific number of tasks; <br/><bold className="font-bold">(3) Process or Learning goal</bold> is related to learning new skills. 
            Research has shown that when the individual lacks the necessary skills or knowledge to
            accomplish a difficult goal, it is better to set a learning goal instead of an outcome or a performance goal.
            <br /> <br />
          </div>{" "}
          <div id="behaviors">
            <h1 className="font-bold">1.3 Behaviors to be encouraged </h1>
            {/* At the same time, it is essential to focus on the different */}
            {/* behaviors we want to encourage and on the different behaviors we */}
            {/* want users to avoid to reach the goal. Thus, we ask designers to */}
            {/* list the possible behaviors that have to be encouraged and which */}
            {/* ones should be avoided to reach the goal. i.e. Users are encouraged */}
            {/* to participate actively and continuously. We want users to use */}
            {/* thoughtful approaches, avoiding trial and error methods. */}
            Game behavior component refers to the clarification of the <bold className="font-bold">game rules</bold>, <bold className="font-bold">game mechanics</bold>, <bold className="font-bold">game progression</bold>. 
            The game rules determine, just like in any other game, how the game inside the application is played. The mechanics describe what happens when a player does something in the game in order to achieve the game’s goal. Progression is defined through a subset of game mechanics that describe how the game overall progresses like, for example, player levels advancing and, thereby, unlocking new things for the game. The final output consists of a list of the game rules, in which mechanics and progression are specified. 
            Moreover, this part is linked to the dynamics subcomponent, which provides a list of possible dynamics that can emerge runtime or after a certain number of runs. 
            This allows researchers and practitioners to (1) monitor the interaction between users
            and mechanics, and (2) to modify the design in order to avoid inadequate interactions and behaviors.  
            <br /> <br />
          </div>{" "}
          <div id="target">
            <h1 className="font-bold">1.4 Target </h1>
            {/* user At the beginning of the design, it’s essential to have in mind */}
            {/* the target user. In this way, it is possible to think about */}
            {/* motivational needs and issues concerning different users. In this */}
            {/* part, we ask designers to list all the possible target users, */}
            {/* reporting all the relevant information (age range, specific */}
            {/* categories, etc). i.e. Middle school and high school students.{" "} */}
            Several documents in the gamification field suggest that users’ individual differences and preferences are crucial for the success of gamified solutions <span className="underline text-blue-400">(B. Kim, 2015; Koivisto & Hamari, 2019; Tondello et al., 2016; Zahedi et al., 2021)</span>. The existing taxonomies take into account the personality traits or the possible user type. Thus, we decided to develop our taxonomy, following the possible users’ category. The target
            users component collects all the relevant data related to the users who will be involved in the use of the software (<bold className="font-bold">category</bold> and <bold className="font-bold">age ranges</bold>)
            The difficulty in the development of a possible exhaustive taxonomy could lead to explorative applications of gamified solutions for studying new categories.
            <br /> <br />
          </div>{" "}
          <div id="technology">
            <h1 className="font-bold">2 Technology </h1>
              The technology component takes into account hardware, software, input and output devices, any other technological components involved in the software development, 
              and the kind of device in which the software will be used. Since there are several different devices that can be used for gamified solutions, 
              and different game elements fit in in a different way according to the device used <span className="underline text-blue-400">(Su, Zou, Xie, and Wang, 2021)</span>, and different interactions with games can change the user experience 
              <span className="underline text-blue-400">(McEwan, Johnson, Wyeth, and Blackler, 2012)</span>, it is important to comprehend if the selected choices could fit the context information (i.e. device type, game engine, etc), 
              and then if the selected gamified elements are optimal for the selected device. This component allows the selection of a choice within:
              <bold className="font-bold">(1) mobile, (2) tablet, (3) computer/laptop, (4) head-mounted display, (5) augmented reality</bold> and <bold className="font-bold">(6) real life</bold>.
              <br /> <br />
              {/* At this point, the selection of the technology we want to use is */}
              {/* closely related to the selection of game mechanics, dynamics, and */}
              {/* gamification elements. In this section, designers should list */}
              {/* hardware, software, input and output devices, and any other */}
              {/* technological component is involved in the software development. */}
              {/* i.e. The software will be developed for computers (Windows, Linux, */}
              {/* and MacOs). The used engine will be Unity2D. Text input devices will */}
              {/* be mouse and keyboards.  */}
          </div>{" "}
          <div id="core">
            <h1 className="font-bold">3 Core </h1>
            {/* The core part refers to the center of the software design. It */}
            {/* consists of the description of the game behavior using game */}
            {/* mechanics, game progression, game rules, and its graphical */}
            {/* representation through the game loop, the description of */}
            {/* gamification elements used, and feedback choices.  */}
            The core part is the salient part of the game design, since it collects the game rules, 
            gamification elements and feedback used in the software. 
            It is composed of the following subcomponents: <bold className="font-bold">game behavior </bold>, 
            <bold className="font-bold">gamification elements </bold>, and <bold className="font-bold">feedback</bold>.
            <br/><br/>
          </div>{" "}
          <div id="gamebehavior">
            <h1 className="font-bold">3.1 Game behavior </h1>
            {/* The game behavior section contains the description of game rules, */}
            {/* game mechanics, game progression, and the game loop.  */}
            Game behavior component refers to the clarification of the <bold className="font-bold">game rules, game mechanics, game progression</bold>. The game rules determine, just like in any other game, how the game inside the application is played. The mechanics describe what happens when a player does something in the game in order to achieve the game’s goal. Progression is defined through a subset of game mechanics that describe how the game overall progresses like, for example, player levels advancing and, thereby, unlocking new things for the game. The final output consists of a list of the game rules, in which mechanics and progression are specified. Moreover, this part is linked to the dynamics
            subcomponent, which provides a list of possible dynamics that can emerge runtime or after a certain number of runs. This allows researchers and practitioners to (1) monitor the interaction between users
            and mechanics, and (2) to modify the design in order to avoid inadequate interactions and behaviors.
            <br/><br/>
          </div>{" "}
          {/* <div id="gamerules"> */}
          {/*   <h1 className="font-bold">3.1.1 Game rules </h1> */}
          {/* Rules define how the game should be played, and how a player can win */}
          {/* or not (Salen and Zimmerman, 2003). In this part, designers should */}
          {/* define the game rules, highlighting which part of them refers to */}
          {/* core and secondary mechanics, and game progression. Then, game rules */}
          {/* should be graphically represented in the game loop. i.e. */}
          {/* Environmental game rules: 1. Players have to answer questions about */}
          {/* positive behaviors towards the environment by choosing one of 4 */}
          {/* different options. 2. Right answers give 10 points. Wrong answers */}
          {/* subtract 5 points. 3. Obtained points are added to the existing ones */}
          {/* 4. Answering within a certain time gives bonus points. 5. Players */}
          {/* can use bonus points to buy one-time power-ups in the in-game shop. */}
          {/* 6. One-time power-ups help players by providing useful information */}
          {/* for the selected question. 7. Repetition of the learned behaviors in */}
          {/* a real context gives an extra 50 points. 8. After 150 points, */}
          {/* players level up. 9. The difficulty of the questions is related to */}
          {/* the players’ level. 10. Players &apos; score is shown in a */}
          {/* level-locked leaderboard. */}
          {/*   <br /> <br /> */}
          {/* </div>{" "} */}
          {/* <div id="mechanics"> */}
          {/*   <h1 className="font-bold">3.1.2 Game mechanics </h1> */}
          {/*   Rules and how users can act within them are described through the */}
          {/*   game mechanics (Schell, 2014). Mechanics can be divided into core */}
          {/*   mechanics and secondary mechanics. Core mechanics act as the */}
          {/*   essential activity moment by moment of the user; instead, secondary */}
          {/*   mechanics are types of mechanics that are available occasionally or */}
          {/*   that exist only in the interaction with the core ones. i.e. Players */}
          {/*   have to answer questions about positive behaviors towards the */}
          {/*   environment by choosing one of 4 different options. Right answers */}
          {/*   give 10 points. Wrong answers subtract 5 points (core mechanics) */}
          {/*   Answering within a certain time gives bonus points. Players can use */}
          {/*   bonus points to buy one-time power-ups (secondary mechanics). <br />{" "} */}
          {/*   <br /> */}
          {/* </div>{" "} */}
          {/* <div id="progression"> */}
          {/*   <h1 className="font-bold">3.1.3 Game progression </h1> */}
          {/*   The game progression is composed by a set of game mechanics and is */}
          {/*   used to define how the game evolves, in particular how the players */}
          {/*   move forward in the game. Game progression is defined within the */}
          {/*   rules. i.e. After 150 points, players level up. The difficulty of */}
          {/*   the questions is related to the players’ level (progression */}
          {/*   mechanics). <br /> <br /> */}
          {/* </div>{" "} */}
          {/* <div id="gamerules"> */}
          {/*   <h1 className="font-bold"> */}
          {/*     3.1.4 Overall game rules representation{" "} */}
          {/*   </h1> */}
          {/*   In this section, we present a simple example of game rules */}
          {/*   representation, taking into account game mechanics and progression. */}
          {/*   i.e. 1. Players have to answer questions about positive behaviors */}
          {/*   towards the environment by choosing one of 4 different options (core */}
          {/*   mechanics). 2. Right answers give 10 points. Wrong answers subtract */}
          {/*   5 points (core mechanics). 3. Obtained points are added to the */}
          {/*   existing ones (secondary mechanics). 4. Answering within a certain */}
          {/*   time gives bonus points (secondary mechanics). 5. Players can use */}
          {/*   bonus points to buy one-time power-ups in the in-game shop */}
          {/*   (secondary mechanics). 6. One-time power-ups help players by */}
          {/*   providing useful information for the selected question (secondary */}
          {/*   mechanics). 7. Repetition of the learned behaviors in a real context */}
          {/*   gives an extra 50 points (core mechanics). 8. After 150 points, */}
          {/*   players level up (progression mechanics). 9. The difficulty of the */}
          {/*   questions is related to the players’ level (progression mechanics). */}
          {/*   10. Players&apos; score is shown in a level-locked leaderboard */}
          {/*   (secondary mechanics). */}
          {/*   <br /> <br /> */}
          {/* </div>{" "} */}
          {/* <div id="gameloop"> */}
          {/*   <h1 className="font-bold">3.2 Game Loop </h1> */}
          {/*   The game loop is a graphical representation of game rules. It */}
          {/*   describes recurrent player activities and the mechanics that make */}
          {/*   them possible. Game loops can be planned according to different */}
          {/*   ways: (1) an overall game loop diagram, (2) a game loop diagram for */}
          {/*   each recurrent component. Figure 2 shows an overall game loop */}
          {/*   diagram. <br /> <br /> */}
          {/*   <div className="justify-center items-center flex"> */}
          {/*     <Image */}
          {/*       loader={figure2} */}
          {/*       src="image-src" */}
          {/*       alt="GamiDoc" */}
          {/*       width={1202 / 2} */}
          {/*       height={784 / 2} */}
          {/*     /> */}
          {/*   </div> */}
          {/* </div>{" "} */}
          
          <div id="gamificationelement">
            {/* To create the gamification part, we rely on the gamification */}
            {/* elements. Several taxonomies try to identify what are the */}
            {/* gamification elements and what is their division (Koivisto e Hamari, */}
            {/* 2019; Toda et al., 2019). We base our model on the work of Koivisto */}
            {/* and Hamari (2019): in their survey, they identify 47 different */}
            {/* gamification elements, divided according to their type into 5 */}
            {/* categories: Achievements / Progression: points, XP, badge, */}
            {/* achievements, leaderboard, timer, challenges, quests, missions, */}
            {/* tasks, medals, trophies, ranking, levels, status bar, progress, */}
            {/* skill tree, quizzes, questions, speed, increasing difficulty. */}
            {/* Social: cooperation, competition, peer-rating, multiplayer, social */}
            {/* network features, teams, customization. Immersion: avatar, */}
            {/* character, storytelling, narrative, narration, virtual identity, */}
            {/* dialogues, theme, virtual world, game world, in-game rewards, role */}
            {/* play. Real-world: external reward, external interactive items, */}
            {/* financial reward, motion tracking, physical card, physical */}
            {/* playboard, physical dice, location data, physical objects as game */}
            {/* resources. Miscellaneous: penalties, full game, virtual currency, */}
            {/* virtual helpers, cues, notification, reminders, retries, health, HP, */}
            {/* onboarding, adaptive difficulty, warnings, virtual pets, game */}
            {/* slogan, funny movies, virtual object as augmented reality, */}
            {/* suggestions. <br /> <br /> */}
            <h1 className="font-bold">3.4 Gamification Elements </h1>
              Gamification elements component shows a list of gamified elements used
              in the software. The previous components are useful to better understand
              which gamification elements fit in the proper way. The selected taxonomy
              of possible gamified elements comes from the work of Toda and colleagues
              <span className="underline text-blue-400">(Toda, Klock, et al., 2019; Toda, Oliveira, et al., 2019)</span>: <br/>
              <br/>
              • <bold className="font-bold">Performance</bold>: Acknowledgement, Level, Progression, Points, Stats; <br/>
              • <bold className="font-bold">Ecological</bold>: Chance, Imposed choice, Economy, Rarity, Time Pressure; <br/>
              • <bold className="font-bold">Social</bold>: Competition, Cooperation, Reputation, Social Pressure; <br/>
              • <bold className="font-bold">Personal</bold>: Novelty, Objectives, Puzzle, Renovation, Sensation; <br/>
              • <bold className="font-bold">Fictional</bold>: Narrative, Storytelling. <br/>
              <br/>
          </div>{" "}
          <div id="feedback">
            <h1 className="font-bold">3.3 Feedback </h1>
            {/* In addition to these, we decided to emphasize feedback, because they */}
            {/* have a crucial significance within some domains (i.e. learning */}
            {/* environment), placing them in a separated category than the */}
            {/* gamification elements, as assumed by Koivisto and Hamari. In this */}
            {/* way, we want to give more weight to the different ways in which the */}
            {/* result of different exercises or game components is reported to */}
            {/* users. */}
            Feedback component refers to the selection of the kind of feedback used in the software. 
            Since there are different ways to provide feedback, mainly according to the content and timing, 
            and since feedback works differently across certain domains and users <span className="underline text-blue-400">(Hassan et al., 2019)</span>, 
            this section is needed to specify the content and the timing of used feedback. The selected taxonomy comes from <span className="underline text-blue-400">(Bassanelli & Bucchiarone, n.d.)</span>. 
            Hence, GamiDOC provides a choice according to the <bold className="font-bold">timing</bold> (<bold className="font-bold">immediate feedback</bold>, and <bold className="font-bold">late feedback</bold>, <bold className="font-bold">personalized feedback </bold>timing), 
            and a choice for the <bold className="font-bold">content</bold> (<bold className="font-bold">corrective feedback</bold>, <bold className="font-bold">explanatory feedback</bold>, <bold className="font-bold">reporting feedback</bold>, and <bold className="font-bold">personalized feedback</bold> content).
            <br/><br/>
          </div>{" "}
          <div>
            <h1 className="font-bold">4 Dynamics</h1>
            {/* Dynamics With regards to Game Dynamics, there is not a unique */}
            {/* definition. Some authors suggest that game dynamics are interactions */}
            {/* between users and mechanics or other game elements, hence different */}
            {/* patterns and behavioral strategies that are more complex than the */}
            {/* sum of their parts. Thus, most of a game is experienced through its */}
            {/* dynamics instead of its mechanics (Salen and Zimmerman, 2003). Other */}
            {/* authors suggest that the dynamics are user replies to the mechanics */}
            {/* (Marczewski, 2013). According to Bohyum (2014), dynamics are seen by */}
            {/* developers as game design principles for the interaction between */}
            {/* users and mechanics. Anyway, a complete definition of dynamics is */}
            {/* not possible, due to its complexity. Hence, dynamics should be */}
            {/* considered as predictable runtime behaviors that emerge from the */}
            {/* interaction between users and mechanics (Junior and Silva, 2021). */}
            {/* Overall, dynamics can’t be fully defined during the design phase, */}
            {/* but they will emerge after a certain number of runs.During the */}
            {/* design phase, it is possible to define some dynamics that will */}
            {/* possibly emerge in order to have more control over the process. */}
            {/* Moreover, we suggest integrating a memorization system to track user */}
            {/* actions and progress. These data should be analyzed to understand */}
            {/* and modify mechanics and rules.  */}
            With dynamics we mean interactions between users and mechanics or other game elements, different patterns and behavioral strategies that are more complex than the sum of their parts. 
            Thus, most of a game is experienced through its dynamics instead of its mechanics <span className="underline text-blue-400">(Tekinbas & Zimmerman, 2003)</span>.
            Hence, it’s important to outline not only the core mechanics and the secondary mechanics, but also how users interact with them, and which are users’ predictable behaviors. 
            Moreover, it’s important to outline which kind of interactions we want to avoid.
            <br /> <br />
          </div>{" "}
          <div id="personalization">
            <h1 className="font-bold">5 Personalization </h1>
            {/* All the gamification elements are picked out based on purposes and */}
            {/* behaviors to be encouraged, mechanics and dynamics, and optionally */}
            {/* based on the user&apos;s individual differences. In literature, */}
            {/* there are several elements to identify any differences between users */}
            {/* (Bartle et al., 1996; Caillois, 2001; Kotsopoulos et al., 2018; */}
            {/* Manero et al., 2016; Nacke et al., 2011; Tondello et al., 2016). In */}
            {/* this model, it’s possible to personalize user experience through the */}
            {/* selection of a game profile based on the HEXAD gaming scale */}
            {/* (Tondello et al., 2016) and feedback preferences. When */}
            {/* personalization elements are applied, it’s important to recall that */}
            {/* these individual preferences for the gamification elements are */}
            {/* inconstant and they can change during the game (Santos et al., */}
            {/* 2021). It is useful to use an online control procedure. */}
            Several solutions in the gamification field suggest a personalization or adaptation 
            of the gamified solutions according to several individual differences and preferences <span className="underline text-blue-400">(Hallifax, Lavoúe, & Serna, 2020;
            Oliveira et al., 2022)</span>, such as the player type <span className="underline text-blue-400">(Bartle, 1996; Ferro, Walz, and Greuter, 2013; Tondello et al., 2016), 
            personality traits (Denden, Tlili, Essalmi, & Jemni, 2017)</span>, motivation and goal <span className="underline text-blue-400">(Tondello et al., 2018)</span>, and so forth. 
            For this, we decided to add a part related to the selection of a personalization modality and a possible adaptation feature.
            <br /> <br />
          </div>{" "}
          <div id="game">
            <h1 className="font-bold">6 Aesthetics</h1>
            {/* Aesthetics The aesthetics component is a crucial aspect in designing */}
            {/* gamified software: aesthetics has a direct relationship with the */}
            {/* users’ experience: the more beautiful the aesthetic part is, the */}
            {/* more interesting and compelling the users will find it. The */}
            {/* aesthetic part must be taken into account to enhance emotional and */}
            {/* subjective responses. This leads to better levels of motivation and */}
            {/* engagement (Schall, 2007). <br /> <br /> */}
            The aesthetics component contains all the information related to the aesthetic part of the software. 
            Aesthetics has a direct relationship with the users’ experience: the more beautiful the aesthetic part is, the more interesting and compelling the users will find it. 
            Hence, this leads to better levels of motivation and engagement <span className="underline text-blue-400">(Schell, 2008; Walk, Gorlich, & Barrett, 2017)</span>. 
            The rationale behind this feature comes from several examples of game design documents we have explored during the design of this tool. 
            Despite this component being highly regarded when making video games, it seems to be completely neglected when analyzing serious games and gamified solutions <span className="underline text-blue-400">(Suh, Cheung, Ahuja, & Wagner, 2017)</span>. 
            In this part, researchers and practitioners have to report decisions and examples related to the aesthetic part and decisions on the user interface.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
