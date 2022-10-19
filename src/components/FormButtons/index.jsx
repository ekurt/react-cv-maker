import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourses,
  setEducation,
  setExperience,
  setHobbies,
  setLanguages,
  setPersonal,
  setProjects,
  setReferences,
  setSkills,
} from "../../stores/form";
import { Button } from "../_form";
import styles from "./index.module.css";

export const FormButtons = ({ handlePrint }) => {
  const dispatch = useDispatch();
  const { personal } = useSelector((state) => state.form);

  const uploadSample = () => {
    dispatch(
      setPersonal({
        nameSurname: "John Doe",
        title: "Front-End Web Developer",
        photo: "blank.webp",
        address: "New York / USA",
        gsm: "001 408 408 4848",
        letter: "hi@johndoe.dev",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta quasi perspiciatis placeat voluptas, inventore vero atque minus cum quae unde quis qui quia odit suscipit ipsa dignissimos dolorum in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta quasi perspiciatis placeat voluptas, inventore vero atque minus cum quae unde quis qui quia odit suscipit ipsa dignissimos dolorum in!",
      })
    );
    dispatch(
      setLanguages([
        {
          name: "Spanish",
          level: "C2",
        },
        {
          name: "Italian",
          level: "B1",
        },
      ])
    );
    dispatch(setHobbies(["Swimming", "Fitness", "Chess", "Camping"]));
    dispatch(
      setEducation([
        {
          school: "Massachusetts Institute of Technology",
          subject: "Computer Science",
          city: "Cambridge/USA",
          degree: "Bachelor Degree",
          from: "Sep, 2016",
          to: "Jun, 2020",
        },
        {
          school: "Massachusetts Institute of Technology",
          subject: "Computer Science",
          city: "Cambridge/USA",
          degree: "Bachelor Degree",
          from: "Sep, 2016",
          to: "Jun, 2020",
        },
      ])
    );
    dispatch(
      setExperience([
        {
          company: "Facebook Inc.",
          position: "Front-End Developer",
          city: "California/USA",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora repellat reiciendis quis pariatur vero impedit dicta nobis eos similique facilis!",
          from: "Nov, 2020",
          to: "Sep, 2021",
        },
        {
          company: "Facebook Inc.",
          position: "Front-End Developer",
          city: "California/USA",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora repellat reiciendis quis pariatur vero impedit dicta nobis eos similique facilis!",
          from: "Nov, 2021",
          to: "Sep, 2022",
        },
      ])
    );
    dispatch(
      setSkills([
        {
          name: "HTML",
          level: 9,
        },
        {
          name: "CSS",
          level: 10,
        },
        {
          name: "JavaScript",
          level: 8,
        },
      ])
    );
    dispatch(
      setProjects([
        {
          name: "Sample Project",
          link: "https://github.com/johndoe/sample-project",
        },
        {
          name: "Sample Project",
          link: "https://github.com/johndoe/sample-project",
        },
      ])
    );
    dispatch(
      setCourses([
        {
          name: "Advanced JavaScript Course",
          company: "Udemy",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          from: "Oct, 2018",
          to: "Dec, 2018",
        },
        {
          name: "Spanish Course",
          company: "Udemy",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          from: "Oct, 2018",
          to: "Dec, 2018",
        },
      ])
    );
    dispatch(
      setReferences([
        {
          name: "John Doe",
          title: "Sr. Full-Stack Developer",
          gsm: "001 408 408 4848",
          company: "JD Development",
        },
        {
          name: "John Doe",
          title: "Sr. Full-Stack Developer",
          gsm: "001 408 408 4848",
          company: "JD Development",
        },
      ])
    );
  };

  const clearData = () => {
    if (window.confirm("Are you sure all data will be deleted?")) {
      dispatch(setCourses([]));
      dispatch(setEducation([]));
      dispatch(setExperience([]));
      dispatch(setHobbies([]));
      dispatch(setLanguages([]));
      dispatch(setPersonal({}));
      dispatch(setProjects([]));
      dispatch(setReferences([]));
      dispatch(setSkills([]));
    }
  };

  return (
    <div className={styles.container}>
      <Button onClick={uploadSample} variant="success">
        FILL SAMPLE
      </Button>
      <Button
        onClick={clearData}
        variant="danger"
        disabled={Object.keys(personal).length === 0}
      >
        CLEAR DATA
      </Button>
      <Button
        onClick={handlePrint}
        variant="info"
        disabled={Object.keys(personal).length === 0}
      >
        SAVE AS PDF
      </Button>
    </div>
  );
};
