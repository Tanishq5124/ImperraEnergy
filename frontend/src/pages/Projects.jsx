import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { projects } from '../mock';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.type === filter));
    }
  }, [filter]);

  const filterOptions = ['All', 'Solar Park'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1692128858397-25ee47444bd2"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            72+ MW of solar park installations powering India's industrial growth
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  variant={filter === option ? 'default' : 'outline'}
                  className={filter === option ? 'bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16]' : ''}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="text-gray-600">
              Showing <strong>{filteredProjects.length}</strong> projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found for the selected filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#a3e635] text-[#1a2332] px-3 py-1 rounded-full text-sm font-bold">
                      {project.capacity}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 text-[#1a2332] px-3 py-1 rounded-full text-xs font-semibold">
                      {project.type}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#1a2332] mb-2">{project.client}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    {project.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-[#a3e635]/10 text-[#1a2332] rounded-full text-xs font-semibold">
                        ⭐ Featured Project
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-6">
            Want to Learn More About Our Projects?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Request detailed case studies and technical specifications for any of our installations
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Request Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;