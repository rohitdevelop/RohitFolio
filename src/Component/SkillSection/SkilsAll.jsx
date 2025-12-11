// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaHtml5, FaJs, FaGitAlt, FaDatabase, FaDocker, FaAws, FaPython } from "react-icons/fa";
// import { SiCss3, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiTypescript, SiGraphql, SiFirebase } from "react-icons/si";
// import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
// import { TbBrandNodejs } from "react-icons/tb";

// import {
//   DndContext,
//   closestCenter,
//   useSensor,
//   useSensors,
//   PointerSensor,
//   KeyboardSensor,
//   TouchSensor,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   arrayMove,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const INITIAL_SKILLS = [
//   { id: "html", skill: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//   { id: "css", skill: "CSS", icon: <SiCss3 className="text-blue-500" /> },
//   { id: "js", skill: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
//   { id: "react", skill: "ReactJS", icon: <RiReactjsLine className="text-cyan-400" /> },
//   { id: "redux", skill: "Redux", icon: <SiRedux className="text-purple-500" /> },
//   { id: "next", skill: "NextJS", icon: <RiNextjsFill className="text-white" /> },
//   { id: "tailwind", skill: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
//   { id: "node", skill: "Node.js", icon: <TbBrandNodejs className="text-green-500" /> },
//   { id: "express", skill: "Express.js", icon: <SiExpress className="text-gray-500" /> },
//   { id: "mongodb", skill: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
//   { id: "typescript", skill: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//   { id: "sql", skill: "SQL", icon: <FaDatabase className="text-gray-400" /> },
//   { id: "git", skill: "Git", icon: <FaGitAlt className="text-red-500" /> },
//   { id: "docker", skill: "Docker", icon: <FaDocker className="text-blue-500" /> },
//   { id: "graphql", skill: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
//   { id: "firebase", skill: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//   { id: "aws", skill: "AWS", icon: <FaAws className="text-orange-400" /> },
//   { id: "python", skill: "Python", icon: <FaPython className="text-blue-500" /> },
// ];

// const SortableSkillItem = ({ Skill }) => {
//   const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: Skill.id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     zIndex: isDragging ? 50 : 1,
//     opacity: isDragging ? 0.9 : 1,
//     cursor: isDragging ? "grabbing" : "grab",
//   };

//   return (
//     <motion.div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       variants={{
//         hidden: { opacity: 0, y: 20, scale: 0.8 },
//         visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
//       }}
//       className="rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg
//                  transition-all duration-300 transform
//                  hover:scale-110 hover:shadow-cyan-400/50 bg-gray-800 text-white relative"
//     >
//       <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{Skill.icon}</div>
//       <h3 className="text-sm sm:text-lg font-bold">{Skill.skill}</h3>
//     </motion.div>
//   );
// };

// const SkilsAll = () => {
//   const [skills, setSkills] = useState(INITIAL_SKILLS);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const filteredSkills = isMobile ? skills.slice(0, skills.length - 6) : skills;
//   const filteredSkillIds = filteredSkills.map((skill) => skill.id);

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(TouchSensor),
//     useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
//   );

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       setSkills((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   };

//   return (
//     <motion.div
//       className="w-full bg-gray-950 rounded-3xl mx-auto p-6 shadow-lg shadow-cyan-500/30 overflow-x-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }} // show only once
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//       }}
//     >
//       <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <SortableContext items={filteredSkillIds} strategy={rectSortingStrategy}>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
//             {filteredSkills.map((Skill) => (
//               <SortableSkillItem key={Skill.id} Skill={Skill} />
//             ))}
//           </div>
//         </SortableContext>
//       </DndContext>
//     </motion.div>
//   );
// };

// export default SkilsAll;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaJs, FaGitAlt, FaDatabase, FaDocker, FaAws, FaPython } from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiTypescript, SiGraphql, SiFirebase } from "react-icons/si";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  TouchSensor, // Import TouchSensor
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const INITIAL_SKILLS = [
  { id: "html", skill: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { id: "css", skill: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { id: "js", skill: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { id: "react", skill: "ReactJS", icon: <RiReactjsLine className="text-cyan-400" /> },
  { id: "redux", skill: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { id: "next", skill: "NextJS", icon: <RiNextjsFill className="text-white" /> },
  { id: "tailwind", skill: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { id: "node", skill: "Node.js", icon: <TbBrandNodejs className="text-green-500" /> },
  { id: "express", skill: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { id: "mongodb", skill: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { id: "typescript", skill: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { id: "sql", skill: "SQL", icon: <FaDatabase className="text-gray-400" /> },
  { id: "git", skill: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { id: "docker", skill: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { id: "graphql", skill: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { id: "firebase", skill: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { id: "aws", skill: "AWS", icon: <FaAws className="text-orange-400" /> },
  { id: "python", skill: "Python", icon: <FaPython className="text-blue-500" /> },
];

const SortableSkillItem = ({ Skill }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: Skill.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.8 : 1,
    cursor: 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg
               transition-all duration-300 transform 
               hover:scale-105 hover:shadow-cyan-400/50 bg-gray-800 text-white relative"
    >
      <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{Skill.icon}</div>
      <h3 className="text-sm sm:text-lg font-bold">{Skill.skill}</h3>
      <div className="absolute inset-0 bg-cyan-400 opacity-0"></div>
    </div>
  );
};

const SkilsAll = () => {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredSkills = isMobile ? skills.slice(0, skills.length - 6) : skills;
  const filteredSkillIds = filteredSkills.map(skill => skill.id);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor), // Added TouchSensor for mobile support
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSkills((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <motion.div
      className="w-full bg-gray-950 rounded-3xl mx-auto p-6 shadow-lg shadow-cyan-500/30"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={filteredSkillIds}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {filteredSkills.map((Skill) => (
              <SortableSkillItem key={Skill.id} Skill={Skill} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </motion.div>
  );
};

export default SkilsAll;