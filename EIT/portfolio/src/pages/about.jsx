import profile from '../assets/images/profile.jpg';
import about from '../assets/images/about.png';
import education from '../assets/images/education.png';
import skills from '../assets/images/skills.png';

const About = () => {
  return (
    <>
      <div className="h-full bg-slate-300 p-1 flex flex-col flex-shrink flex-grow gap-5">
        <div className="p-1">
          <div className='flex py-2 gap-2 items-center'>
          <h1 className="text-xl font-bold mb-2">About Me</h1>
          <img src={about} className='h-8 w-8'/>
          </div>
          <div className='flex justify-center'>
            <img src={profile} alt="Profile Pic" className='rounded-full h-52 w-52'/>
          </div>
          <p className="before:pl-5 text-justify text-lg">
            Hi, I'm Roshan, a passionate Full-Stack Web Developer with a strong
            focus on Python. With extensive experience in both front-end and
            back-end development, I excel at creating robust and scalable web
            applications. My skills include designing dynamic user interfaces
            and developing server-side logic to deliver seamless,
            high-performance solutions. I thrive on turning complex problems
            into elegant solutions and am always eager to learn and adapt to new
            technologies.
          </p>
        </div>
        <div className="p-1">
          <div className='flex gap-2 py-5'>
          <h1 className="text-xl font-bold mb-2">Educational Detail</h1>
          <img src={education} alt="" className='h-8 w-8'/>
          </div>
          <table className="w-full bg-slate-400 border-collapse text-md">
            <thead>
              <tr className="*:p-2 text-left">
                <th>Course</th>
                <th>Institution Name</th>
                <th className="">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="*:p-2">
                <td>MCA</td>
                <td>
                  Dr.SNS Rajalakshmi College of Arts and Science, Coimbatore
                </td>
                <td>2023-2025</td>
              </tr>
              <tr className="*:p-2">
                <td>BCA</td>
                <td>Kongunadu Arts and Science College, Coimbatore</td>
                <td>2020-2023</td>
              </tr>
              <tr className="*:p-2">
                <td>
                  XII<sup>th</sup>
                </td>
                <td>Metro Matric Higher Secondary School, Coimbatore</td>
                <td>2019-2020</td>
              </tr>
              <tr className="*:p-2">
                <td>
                  X<sup>th</sup>
                </td>
                <td>Metro Matric Higher Secondary School, Coimbatore</td>
                <td>2017-2018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className='flex gap-1 py-2'>
          <h1 className="text-xl font-bold mb-2">Skills</h1>
          <img src={skills} alt="" className='h-8 w-10'/>
          </div>
          <ul className="text-lg">
            <li className="before:pl-5 font-semibold ">
              Technical Skills
              <ul className="pl-16 font-normal list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Django</li>
              </ul>
            </li>
            <li className="before:pl-5 font-semibold">
                Tools Known
                <ul className="pl-16 font-normal list-disc">
                    <li>Git and Git-Hub</li>
                    <li>Visual Studio Code</li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
