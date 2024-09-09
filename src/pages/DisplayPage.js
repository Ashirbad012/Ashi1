import React from 'react';
import { motion } from 'framer-motion';
import './Display.css'; // Ensure you create this CSS file for additional styles

function DisplayPage() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6 gradient-background">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    <motion.img
                      className="img-fluid rounded mb-4"
                      loading="lazy"
                      src="/path/to/logo.png" // Update with your logo path
                      width="245"
                      height="80"
                      alt="Patrosoft Logo"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <hr className="border-primary-subtle mb-4" />
                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                    <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h1>Sign Up</h1>
                      </div>
                    </div>
                  </div>
                  <form action="#!">
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="first_name" className="form-label">First Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          id="first_name"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="last_name" className="form-label">Last Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          id="last_name"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="organization" className="form-label">Organization Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          name="organization"
                          id="organization"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="remember_me"
                            id="remember_me"
                          />
                          <label className="form-check-label text-secondary" htmlFor="remember_me">
                            Keep me logged in
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <motion.button
                            className="btn bsb-btn-xl btn-primary"
                            style={{ borderRadius: '12px', background: 'linear-gradient(-135deg, #50b6c8, #4158d0)', fontSize: '21px' }}
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                          >
                            Submit
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <a href="#!" className="link-secondary text-decoration-none">Create new account</a>
                        <a href="#!" className="link-secondary text-decoration-none">Forgot password</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default DisplayPage;
