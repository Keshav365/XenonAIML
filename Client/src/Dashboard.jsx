import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import PageContainer from './components/PageContainer';
import PageContent from './components/PageContent';
import RightBar from './components/RightBar';
import { AuthContext } from './Context/AuthContext';
import './components/CSS/card.css'

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [links, setLinks] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const sortByEndDate = (a, b) => new Date(a.end_date) - new Date(b.end_date);

  const categorizeAndSortTasks = useCallback((fetchedTasks) => {
    const now = new Date();
    const current = fetchedTasks.filter(task => new Date(task.end_date) > now && task.completed !== 1).sort(sortByEndDate);
    const upcoming = fetchedTasks.filter(task => new Date(task.start_date) > now).sort(sortByEndDate);
    const completed = fetchedTasks.filter(task => task.completed === 1).sort(sortByEndDate);

    setCurrentTasks(current);
    setUpcomingTasks(upcoming);
    setCompletedTasks(completed);
  }, []);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(`https://homiwise.azurewebsites.net/api/tasks?userId=${currentUser?.id}`);
      const fetchedTasks = response.data;
      setTasks(fetchedTasks);
      categorizeAndSortTasks(fetchedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, [currentUser?.id, categorizeAndSortTasks]);

  const fetchLinks = useCallback(async () => {
    try {
      const response = await axios.get(`https://homiwise.azurewebsites.net/api/links?userId=${currentUser?.id}`);
      setLinks(response.data);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  }, [currentUser?.id]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      fetchTasks();
      fetchLinks();
    }
  }, [currentUser, fetchTasks, fetchLinks, navigate]);

  const addTask = (newTask) => setTasks(prevTasks => [...prevTasks, newTask]);

  return (
    <div className='task-manager'>
      <PageContent
        userId={currentUser?.id}
      />
      <RightBar
        logoutFunc={logout}
        userData={currentUser}
        tasks={tasks}
        currentTasks={currentTasks}
      />
    </div>
  );
}

export default Dashboard;
