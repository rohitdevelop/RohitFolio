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
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  arrayMove,
  rectSortingStrategy, // Use rectSortingStrategy for grid layouts
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// --- Data and Initial Setup ---
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

// --- 1. Sortable Skill Item Component ---

// This component uses the useSortable hook to enable drag/drop on a single skill item
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
    // Apply transforms for positioning and smooth transitions
    transform: CSS.Transform.toString(transform),
    transition,
    // Add z-index and opacity when dragging for a better visual
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.8 : 1,
    // Add a cursor style to indicate the element is draggable
    cursor: 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners} // The listeners prop contains the necessary event handlers for dragging (like onMouseDown)
      className="rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg
                transition-all duration-300 transform 
                hover:scale-105 hover:shadow-cyan-400/50 bg-gray-800 text-white relative"
    >
      <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{Skill.icon}</div>
      <h3 className="text-sm sm:text-lg font-bold">{Skill.skill}</h3>
      {/* Hover Effect Overlay (kept for original styling, opacity is 0) */}
      <div className="absolute inset-0 bg-cyan-400 opacity-0"></div>
    </div>
  );
};

// --- 2. Main Component ---

const SkilsAll = () => {
  // We must initialize state with IDs for dnd-kit
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter skills based on mobile state
  // We must manage the state of the skills array for reordering
  const filteredSkills = isMobile ? skills.slice(0, skills.length - 6) : skills;
  const filteredSkillIds = filteredSkills.map(skill => skill.id);

  // Setup sensors for mouse, touch, and keyboard support
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Function to handle the drop event
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      // Find the old and new indexes based on the ID of the dragged item
      setSkills((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        // arrayMove is a dnd-kit utility to reorder the array immutably
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
      {/* 3. Wrap everything in DndContext */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* 4. Wrap the droppable container in SortableContext */}
        <SortableContext
          items={filteredSkillIds} // Must be an array of IDs
          strategy={rectSortingStrategy} // Grid layout strategy
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {/* 5. Map over the skills and render the SortableSkillItem */}
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