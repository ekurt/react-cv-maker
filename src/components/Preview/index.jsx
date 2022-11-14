import React, { forwardRef } from "react";
import {
  PreviewPersonal,
  PreviewSocial,
  PreviewLanguage,
  PreviewHobbies,
  PreviewHeader,
  PreviewEducation,
  PreviewExperience,
  PreviewSkills,
  PreviewProjects,
  PreviewCourses,
  PreviewReferences,
} from "../index";
import styles from "./index.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setLeftSide, setRightSide } from "../../stores/site";

export const Preview = forwardRef(({ array }, ref) => {
  const dispatch = useDispatch();
  const { leftSide, rightSide, colors, isContentEditable } = useSelector(
    (state) => state.site
  );

  const handleOnDrugEndLeft = (result) => {
    if (!result.destination) return;
    const items = Array.from(leftSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setLeftSide(items));
  };

  const handleOnDrugEndRight = (result) => {
    if (!result.destination) return;
    const items = Array.from(rightSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setRightSide(items));
  };

  const previews = {
    PreviewSocial: <PreviewSocial />,
    PreviewLanguage: <PreviewLanguage />,
    PreviewHobbies: <PreviewHobbies />,
    PreviewEducation: <PreviewEducation />,
    PreviewExperience: <PreviewExperience />,
    PreviewSkills: <PreviewSkills />,
    PreviewProjects: <PreviewProjects />,
    PreviewCourses: <PreviewCourses />,
    PreviewReferences: <PreviewReferences />,
  };

  return (
    <div
      className={styles.preview}
      style={{ background: colors.body }}
      ref={ref}
      contentEditable={isContentEditable}
      suppressContentEditableWarning={true}
    >
      <div
        className={styles.leftSide}
        style={{ background: colors.secondary, color: colors.text1 }}
      >
        <PreviewPersonal />
        <DragDropContext onDragEnd={handleOnDrugEndLeft}>
          <Droppable droppableId="leftSide">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {leftSide.map((item, index) => (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                    isDragDisabled={isContentEditable}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {previews[item.component]}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className={styles.rightSide} style={{ color: colors.text2 }}>
        <PreviewHeader />
        <DragDropContext onDragEnd={handleOnDrugEndRight}>
          <Droppable droppableId="rightSide">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {rightSide.map((item, index) => (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                    isDragDisabled={isContentEditable}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {previews[item.component]}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
});
