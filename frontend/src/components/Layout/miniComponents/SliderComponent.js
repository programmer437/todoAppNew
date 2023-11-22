import React from 'react'

const SliderComponent = () => {
    const headings=['Stay Organized','Boost Productivity','Achieve More','Collaborate Effortlessly']
    const SubHeadings=["Keep your tasks in order effortlessly.",
                        "Experience a surge in productivity with Todoist's intuitive features",
                        "Collaboration made simple.",
                        "Acknowledge your accomplishments with Todoist"
                    ]
    const paragraphs=["Todoist allows you to categorize and prioritize tasks with ease. Use color-coded labels, due dates, and project folders to maintain a structured and organized to-do list. Whether it's work, personal, or a special project, Todoist ensures you stay on top of your priorities.",
                      "Set recurring tasks, reminders, and deadlines to stay on track. The intelligent task prioritization ensures you focus on what matters most. With a user-friendly interface and seamless integration, Todoist is designed to enhance your efficiency and help you achieve more in less time.",
                      "Todoist lets you share projects, assign tasks, and track progress collaboratively. Foster teamwork by staying connected with colleagues, friends, or family members. Real-time updates and shared task lists facilitate seamless communication, ensuring everyone is on the same page. Achieve collective goals with ease using Todoist's collaborative features.",
                      "The app not only helps you manage tasks but also celebrates your progress. Set milestones, mark completed tasks, and witness your achievements visually. Todoist encourages a positive mindset by highlighting your journey towards success. Revel in your productivity and enjoy the satisfaction of a well-managed to-do list."]
    const showContent=[1,2,3,4];
  return (
    <>
    {showContent.map((e,i)=>
        <>
        <div className="sliderContainerLeftContent">
        <h1>{headings[i]}</h1>
        <p>{SubHeadings[i]}</p>
        <p>{paragraphs[i]}</p>
        </div>
        </>)}
        </>
  )
}

export default SliderComponent