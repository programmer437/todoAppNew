import React, { useEffect } from 'react';

const SliderComponent = () => {
  const headings = ['Stay Organized', 'Boost Productivity', 'Achieve More', 'Collaborate Effortlessly'];
  const subHeadings = [
    'Keep your tasks in order effortlessly.',
    "Experience a surge in productivity with Todoist's intuitive features",
    'Collaboration made simple.',
    'Acknowledge your accomplishments with Todoist',
  ];
  const paragraphs = [
    'Todoist allows you to categorize and prioritize tasks with ease. Use color-coded labels, due dates, and project folders to maintain a structured and organized to-do list. Whether it\'s work, personal, or a special project, Todoist ensures you stay on top of your priorities.',
    'Set recurring tasks, reminders, and deadlines to stay on track. The intelligent task prioritization ensures you focus on what matters most. With a user-friendly interface and seamless integration, Todoist is designed to enhance your efficiency and help you achieve more in less time.',
    'Todoist lets you share projects, assign tasks, and track progress collaboratively. Foster teamwork by staying connected with colleagues, friends, or family members. Real-time updates and shared task lists facilitate seamless communication, ensuring everyone is on the same page. Achieve collective goals with ease using Todoist\'s collaborative features.',
    'The app not only helps you manage tasks but also celebrates your progress. Set milestones, mark completed tasks, and witness your achievements visually. Todoist encourages a positive mindset by highlighting your journey towards success. Revel in your productivity and enjoy the satisfaction of a well-managed to-do list.',
  ];

  useEffect(() => {
    // Cache references to elements outside the scroll event listener
    const contents = document.querySelectorAll('.sliderContainerLeftContent');
    const body = document.body;

    // Cache styles for each scroll range
    const styles = [
      { backgroundColor: 'white', heading: '#d4413c', subHeading: 'black', paragraph: 'black', scrollY: 1120 },
      { backgroundColor: '#C0AAF9', heading: '#640000', subHeading: '#000000', paragraph: '#000000', scrollY: 1600 },
      { backgroundColor: '#13446C', heading: 'white', subHeading: '#FFD70D', paragraph: 'white', scrollY: 2200 },
      { backgroundColor: 'black', heading: '#ADB8F7', subHeading: '#77A7FF', paragraph: '#CAEEFF', scrollY: 2800 },
      { backgroundColor: '#00098A', heading: '#F2CAFF', subHeading: '#FCFCFC', paragraph: '#D4F5BC', scrollY: Infinity },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find the index of the scroll range
      const rangeIndex = styles.findIndex((range) => scrollY < range.scrollY);

      if (rangeIndex !== -1) {
        const style = styles[rangeIndex]; 

        // Apply styles to all elements
        contents.forEach((content) => {
          const heading = content.querySelector('h1');
          const subHeading = content.querySelector('p');
          const paragraph = content.querySelector('p:nth-of-type(2)');

          body.style.backgroundColor = style.backgroundColor;
          heading.style.color = style.heading;
          subHeading.style.color = style.subHeading;
          paragraph.style.color = style.paragraph;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {headings.map((heading, i) => (
        <div className="sliderContainerLeftContent" key={i}>
          <h1>{heading}</h1>
          <p>{subHeadings[i]}</p>
          <p>{paragraphs[i]}</p>
        </div>
      ))}
    </>
  );
};

export default SliderComponent;
