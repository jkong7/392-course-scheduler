import React from 'react';
import Banner from './Banner';
import useJsonQuery from '../utilities/useJsonQuery';
import CourseList from './CourseList';

const CoursePage = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>; 
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <CourseList courses={data.courses} />
    </div>
  );
};

export default CoursePage;