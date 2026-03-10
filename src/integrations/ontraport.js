/**
 * Ontraport Integration
 * Handles email capture and lead management
 */

const ONTRAPORT_APP_ID = 'YOUR_APP_ID';
const ONTRAPORT_API_KEY = 'YOUR_API_KEY';

class OntraportIntegration {
  constructor() {
    this.appId = ONTRAPORT_APP_ID;
    this.apiKey = ONTRAPORT_API_KEY;
  }

  /**
   * Add a new lead from quiz results
   * @param {string} email - User's email
   * @param {string} quizType - Type of quiz completed
   * @param {object} result - Quiz result data
   */
  async addLead(email, quizType, result) {
    const contactData = {
      email: email,
      // Add custom fields based on your Ontraport setup
      // Example: 'quiz_breathwork_style': result.title,
      // Example: 'quiz_trauma_path': result.title,
    };

    // Use Ontraport's API to create/update contact
    // This is a placeholder - you'll need to configure your specific custom fields

    console.log('Lead captured:', { email, quizType, result: result.title });
    return { success: true, message: 'Lead added to Ontraport' };
  }

  /**
   * Trigger an email sequence based on quiz result
   * @param {string} email - User's email
   * @param {string} sequenceType - Email sequence to trigger
   */
  async triggerSequence(email, sequenceType) {
    // Ontraport allows triggering campaigns/sequences via API
    // This would add the contact to a specific campaign

    console.log('Triggering sequence:', { email, sequence: sequenceType });
    return { success: true, message: `Sequence ${sequenceType} triggered` };
  }
}

module.exports = OntraportIntegration;
