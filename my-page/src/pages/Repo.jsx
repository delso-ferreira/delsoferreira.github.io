import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Card from '../components/Card';
import '../styles/projects.css';
function Repo() {
  const [repos, setrepos] = useState([])

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch('https://api.github.com/users/delso-ferreira/repos')
      const data = await response.json()      
        return setrepos(data)      
    }
    getRepos()
  }, [])

  return (
    <section className='projects'>
      <h2 className="projects-header">Projects</h2>
      {
        repos.length > 0 ? (
          <div className='card-container'>
            {
              repos.filter(repo => repo.name !== 'delso-ferreira' && repo.name !== 'delsoferreira.github.io').map((repo) => (
                <Card
                  className="repo-infos"
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                />
              ))
            }
          </div>
        ) : (
          <Loading />
        )
      }
    </section>
  )
}

export default Repo;