# Ontraport List Cleanup Guide

## Overview
- **Total Contacts**: ~200,000
- **Issue**: List not validated
- **Goal**: Clean and validate emails for better deliverability

## Recommended Approach

### Step 1: Export Current List
1. Go to Ontraport → Contacts
2. Export all contacts as CSV
3. Include fields: Email, First Name, Last Name, Status

### Step 2: Validate with Email Verification Service

#### Option A: ZeroBounce (Recommended for Ontraport)
- **Website**: zerobounce.net
- **Integrations**: Direct Ontraport integration available
- **Features**: Catch-all detection, spam trap detection, abuse detection
- **Pricing**: Starts at $19/month for 5,000 emails

#### Option B: NeverBounce
- **Website**: neverbounce.com
- **Ontraport Integration**: Via API or Zapier
- **Pricing**: Starts at $0.02/email

#### Option C: QuickEmailVerification
- **Website**: quickemailverification.com
- **Free Tier**: 500 emails/day free

### Step 3: Process Flow

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Ontraport     │────▶│  Export CSV      │────▶│  Validation    │
│  Contacts       │     │  (200k emails)   │     │  Service        │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Cleaned List  │◀────│  Import Back     │◀────│  Results CSV    │
│  to Ontraport  │     │  to Ontraport    │     │  (Valid/Invalid)│
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

### Step 4: Batch Processing (200k contacts)

For 200,000 contacts, process in batches:

| Day | Batch | Emails | Service Cost (approx) |
|-----|-------|--------|----------------------|
| 1 | Batch 1 | 25,000 | $100 |
| 2 | Batch 2 | 25,000 | $100 |
| 3 | Batch 3 | 25,000 | $100 |
| 4 | Batch 4 | 25,000 | $100 |
| 5 | Batch 5 | 25,000 | $100 |
| 6 | Batch 6 | 25,000 | $100 |
| 7 | Batch 7 | 25,000 | $100 |
| 8 | Batch 8 | 25,000 | $100 |

**Total Cost**: ~$800-1000 for full validation

### Step 5: Ontraport Cleanup Rules

After validation, create automation rules:

1. **Hard Bounce Handling**
   - Remove contacts with "Invalid" status
   - Auto-unsubscribe hard bounces

2. **Engagement Segmentation**
   - Active (opened in 90 days)
   - At-risk (opened 90-180 days ago)
   - Cold (no open > 180 days)

3. **Re-engagement Campaign**
   - Send "We miss you" to at-risk
   - Remove cold contacts after re-engagement failure

#### Option D: Reoon Email Verifier (RECOMMENDED)
- **Website**: reoon.com
- **Features**: Bulk email verification, catch-all detection, spam trap detection
- **Pricing**: Starts at $0.008/email (very competitive)
- **Best for**: Large lists (200k+), cost-effective bulk validation
- **Ontraport Integration**: Export CSV → Reoon → Import cleaned data back

## Questions for Ontraport Specialist

1. What custom fields should we create for validation status?
2. What's the process for bulk import with status updates?
3. Are there any Ontraport automation rules we should set up post-cleanup?
4. How to handle contacts with "catch-all" email addresses?

## Next Steps (Tomorrow)

- [ ] Get Reoon API key (reoon.com)
- [ ] Export full contact list from Ontraport
- [ ] Set up validation service
- [ ] Begin batch processing
- [ ] Configure import back to Ontraport

---

**Prepared for**: Meeting at 10:00 AM
**Status**: Ready for review
